import { getLogger } from '@jitsi/logger';
import { $iq, Strophe } from 'strophe.js';

import * as MediaType from '../../service/RTC/MediaType';
import {
    ACTION_JINGLE_TR_RECEIVED,
    ACTION_JINGLE_TR_SUCCESS,
    createJingleEvent
} from '../../service/statistics/AnalyticsEvents';
import XMPPEvents from '../../service/xmpp/XMPPEvents';
import Statistics from '../statistics/statistics';
import GlobalOnErrorHandler from '../util/GlobalOnErrorHandler';
import RandomUtil from '../util/RandomUtil';

import ConnectionPlugin from './ConnectionPlugin';
import { expandSourcesFromJson } from './JingleHelperFunctions';
import JingleSessionPC from './JingleSessionPC';

const logger = getLogger(__filename);

// XXX Strophe is build around the idea of chaining function calls so allow long
// function call chains.
/* eslint-disable newline-per-chained-call */

/**
 * Parses the transport XML element and returns the list of ICE candidates formatted as text.
 *
 * @param {*} transport Transport XML element extracted from the IQ.
 * @returns {Array<string>}
 */
function _parseIceCandidates(transport) {
    const candidates = transport.querySelectorAll(':scope >candidate');
    const parseCandidates = [];

    // Extract the candidate information from the IQ.
    candidates.forEach(candidate => {
        const attributes = candidate.attributes;
        const candidateAttrs = [];

        for (let i = 0; i < attributes.length; i++) {
            const attr = attributes[i];

            candidateAttrs.push(`${attr.name}: ${attr.value}`);
        }
        parseCandidates.push(candidateAttrs.join(' '));
    });

    return parseCandidates;
}

/**
 *
 */
export default class JingleConnectionPlugin extends ConnectionPlugin {
    /**
     * Creates new <tt>JingleConnectionPlugin</tt>
     * @param {XMPP} xmpp
     * @param {EventEmitter} eventEmitter
     * @param {Object} iceConfig an object that holds the iceConfig to be passed
     * to the p2p and the jvb <tt>PeerConnection</tt>.
     */
    constructor(xmpp, eventEmitter, iceConfig) {
        super();
        this.xmpp = xmpp;
        this.eventEmitter = eventEmitter;
        this.sessions = {};
        this.jvbIceConfig = iceConfig.jvb;
        this.p2pIceConfig = iceConfig.p2p;
        this.mediaConstraints = {
            offerToReceiveAudio: true,
            offerToReceiveVideo: true
        };
    }

    /**
     *
     * @param connection
     */
    init(connection) {
        super.init(connection);
        this.connection.addHandler(this.onJingle.bind(this),
            'urn:xmpp:jingle:1', 'iq', 'set', null, null);
    }

    /**
     *
     * @param iq
     */
    onJingle(iq) {
        const sid = iq.querySelector(':scope jingle').getAttribute('sid');
        const action = iq.querySelector(':scope jingle').getAttribute('action');
        const fromJid = iq.getAttribute('from');

        // send ack first
        const ack = $iq({ type: 'result',
            to: fromJid,
            id: iq.getAttribute('id')
        });

        let sess = this.sessions[sid];

        if (action !== 'session-initiate') {
            if (!sess) {
                ack.attrs({ type: 'error' });
                ack.c('error', { type: 'cancel' })
                    .c('item-not-found', {
                        xmlns: 'urn:ietf:params:xml:ns:xmpp-stanzas'
                    })
                    .up()
                    .c('unknown-session', {
                        xmlns: 'urn:xmpp:jingle:errors:1'
                    });
                logger.warn(`invalid session id: ${sid}`);
                logger.debug(iq);
                this.connection.send(ack);

                return true;
            }

            // local jid is not checked
            if (fromJid !== sess.remoteJid) {
                logger.warn(
                    'jid mismatch for session id', sid, sess.remoteJid, iq);
                ack.attrs({ type: 'error' });
                ack.c('error', { type: 'cancel' })
                    .c('item-not-found', {
                        xmlns: 'urn:ietf:params:xml:ns:xmpp-stanzas'
                    })
                    .up()
                    .c('unknown-session', {
                        xmlns: 'urn:xmpp:jingle:errors:1'
                    });
                this.connection.send(ack);

                return true;
            }
        } else if (sess !== undefined) {
            // Existing session with same session id. This might be out-of-order
            // if the sess.remoteJid is the same as from.
            ack.attrs({ type: 'error' });
            ack.c('error', { type: 'cancel' })
                .c('service-unavailable', {
                    xmlns: 'urn:ietf:params:xml:ns:xmpp-stanzas'
                })
                .up();
            logger.warn('duplicate session id', sid, iq);
            this.connection.send(ack);

            return true;
        }
        const now = window.performance.now();

        // FIXME that should work most of the time, but we'd have to
        // think how secure it is to assume that user with "focus"
        // nickname is Jicofo.
        const isP2P = Strophe.getResourceFromJid(fromJid) !== 'focus';

        // see http://xmpp.org/extensions/xep-0166.html#concepts-session

        const jsonMessages = iq.querySelectorAll(':scope jingle>json-message');

        if (jsonMessages?.length) {
            let audioVideoSsrcs;

            logger.info(`Found a JSON-encoded element in ${action}, translating to standard Jingle.`);
            for (let i = 0; i < jsonMessages.length; i++) {
                // Currently there is always a single json-message in the IQ with the source information.
                audioVideoSsrcs = expandSourcesFromJson(iq, jsonMessages[i]);
            }

            if (audioVideoSsrcs?.size) {
                const logMessage = [];

                for (const endpoint of audioVideoSsrcs.keys()) {
                    logMessage.push(`${endpoint}:[${audioVideoSsrcs.get(endpoint)}]`);
                }
                logger.debug(`Received ${action} from ${fromJid} with sources=${logMessage.join(', ')}`);
            }

            // TODO: is there a way to remove the json-message elements once we've extracted the information?
            // removeChild doesn't seem to work.
        }

        switch (action) {
        case 'session-initiate': {
            logger.log('(TIME) received session-initiate:\t', now);
            const startMuted = iq.querySelector(':scope jingle>startmuted');

            isP2P && logger.debug(`Received ${action} from ${fromJid}`);
            if (startMuted) {
                const audioMuted = startMuted.getAttribute(MediaType.AUDIO);
                const videoMuted = startMuted.getAttribute(MediaType.VIDEO);

                this.eventEmitter.emit(
                    XMPPEvents.START_MUTED_FROM_FOCUS,
                    audioMuted === 'true',
                    videoMuted === 'true');
            }
            const pcConfig = isP2P ? this.p2pIceConfig : this.jvbIceConfig;

            sess
                = new JingleSessionPC(
                    iq.querySelector(':scope jingle').getAttribute('sid'),
                    iq.getAttribute('to'),
                    fromJid,
                    this.connection,
                    this.mediaConstraints,

                    // Makes a copy in order to prevent exception thrown on RN when either this.p2pIceConfig or
                    // this.jvbIceConfig is modified and there's a PeerConnection instance holding a reference
                    JSON.parse(JSON.stringify(pcConfig)),
                    isP2P,
                    /* initiator */ false);

            this.sessions[sess.sid] = sess;
            this.eventEmitter.emit(XMPPEvents.CALL_INCOMING, sess, iq.querySelector(':scope >jingle'), now);
            break;
        }
        case 'session-accept': {
            const ssrcs = [];
            const contents = iq.querySelector(':scope jingle>content');

            // Extract the SSRCs from the session-accept received from a p2p peer.
            for (const content of contents) {
                const ssrc = content.querySelector(':scope description').getAttribute('ssrc');

                ssrc && ssrcs.push(ssrc);
            }
            logger.debug(`Received ${action} from ${fromJid} with ssrcs=${ssrcs}`);
            this.eventEmitter.emit(XMPPEvents.CALL_ACCEPTED, sess, iq.querySelector(':scope >jingle'));
            break;
        }
        case 'content-modify': {
            const height = iq.querySelector(':scope jingle>content[name="video"]>max-frame-height');

            logger.debug(`Received ${action} from ${fromJid} with a max-frame-height=${height?.textContent}`);
            sess.modifyContents(iq.querySelector(':scope >jingle'));
            break;
        }
        case 'transport-info': {
            const candidates = _parseIceCandidates(iq.querySelector(':scope jingle>content>transport'));

            logger.debug(`Received ${action} from ${fromJid} for candidates=${candidates.join(', ')}`);
            this.eventEmitter.emit(XMPPEvents.TRANSPORT_INFO, sess, iq.querySelector(':scope >jingle'));
            break;
        }
        case 'session-terminate': {
            logger.log('terminating...', sess.sid);
            let reasonCondition = null;
            let reasonText = null;

            if (iq.querySelector(':scope >jingle>reason')) {
                reasonCondition
                    = iq.querySelector(':scope >jingle>reason>:first').tagName;
                reasonText = iq.querySelector(':scope >jingle>reason>text').textContent;
            }
            logger.debug(`Received ${action} from ${fromJid} disconnect reason=${reasonText}`);
            this.terminate(sess.sid, reasonCondition, reasonText);
            this.eventEmitter.emit(XMPPEvents.CALL_ENDED, sess, reasonCondition, reasonText);
            break;
        }
        case 'transport-replace': {
            logger.info('(TIME) Start transport replace:\t', now);
            const transport = iq.querySelector(':scope jingle>content>transport');
            const candidates = _parseIceCandidates(transport);
            const iceUfrag = transport.getAttribute('ufrag');
            const icePwd = transport.getAttribute('pwd');
            const dtlsFingerprint = transport.querySelector(':scope >fingerprint')?.textContent;

            logger.debug(`Received ${action} from ${fromJid} with iceUfrag=${iceUfrag},`
            + ` icePwd=${icePwd}, DTLS fingerprint=${dtlsFingerprint}, candidates=${candidates.join(', ')}`);

            Statistics.sendAnalytics(createJingleEvent(
                ACTION_JINGLE_TR_RECEIVED,
                {
                    p2p: isP2P,
                    value: now
                }));

            sess.replaceTransport(iq.querySelector(':scope >jingle'), () => {
                const successTime = window.performance.now();

                logger.info('(TIME) Transport replace success:\t', successTime);
                Statistics.sendAnalytics(createJingleEvent(
                    ACTION_JINGLE_TR_SUCCESS,
                    {
                        p2p: isP2P,
                        value: successTime
                    }));
            }, error => {
                GlobalOnErrorHandler.callErrorHandler(error);
                logger.error('Transport replace failed', error);
                sess.sendTransportReject();
            });
            break;
        }
        case 'source-add':
            sess.addRemoteStream(iq.querySelector(':scope >jingle>content'));
            break;
        case 'source-remove':
            sess.removeRemoteStream(iq.querySelector(':scope >jingle>content'));
            break;
        default:
            logger.warn('jingle action not implemented', action);
            ack.attrs({ type: 'error' });
            ack.c('error', { type: 'cancel' })
                .c('bad-request',
                    { xmlns: 'urn:ietf:params:xml:ns:xmpp-stanzas' })
                .up();
            break;
        }
        this.connection.send(ack);

        return true;
    }

    /**
     * Creates new <tt>JingleSessionPC</tt> meant to be used in a direct P2P
     * connection, configured as 'initiator'.
     * @param {string} me our JID
     * @param {string} peer remote participant's JID
     * @return {JingleSessionPC}
     */
    newP2PJingleSession(me, peer) {
        const sess
            = new JingleSessionPC(
                RandomUtil.randomHexString(12),
                me,
                peer,
                this.connection,
                this.mediaConstraints,
                this.p2pIceConfig,
                /* P2P */ true,
                /* initiator */ true);

        this.sessions[sess.sid] = sess;

        return sess;
    }

    /**
     *
     * @param sid
     * @param reasonCondition
     * @param reasonText
     */
    terminate(sid, reasonCondition, reasonText) {
        if (this.sessions.hasOwnProperty(sid)) {
            if (this.sessions[sid].state !== 'ended') {
                this.sessions[sid].onTerminated(reasonCondition, reasonText);
            }
            delete this.sessions[sid];
        }
    }

    /**
     *
     */
    getStunAndTurnCredentials() {
        // get stun and turn configuration from server via xep-0215
        // uses time-limited credentials as described in
        // http://tools.ietf.org/html/draft-uberti-behave-turn-rest-00
        //
        // See https://modules.prosody.im/mod_turncredentials.html
        // for a prosody module which implements this.
        // Or the new implementation https://modules.prosody.im/mod_external_services which will be in prosody 0.12
        //
        // Currently, this doesn't work with updateIce and therefore credentials
        // with a long validity have to be fetched before creating the
        // peerconnection.
        // TODO: implement refresh via updateIce as described in
        //      https://code.google.com/p/webrtc/issues/detail?id=1650
        this.connection.sendIQ(
            $iq({ type: 'get',
                to: this.xmpp.options.hosts.domain })
                .c('services', { xmlns: 'urn:xmpp:extdisco:2' }),
            v2Res => this.onReceiveStunAndTurnCredentials(v2Res),
            () => {
                logger.warn('getting turn credentials with extdisco:2 failed, trying extdisco:1');
                this.connection.sendIQ(
                    $iq({ type: 'get',
                        to: this.xmpp.options.hosts.domain })
                        .c('services', { xmlns: 'urn:xmpp:extdisco:1' }),
                    v1Res => this.onReceiveStunAndTurnCredentials(v1Res),
                    () => {
                        logger.warn('getting turn credentials failed');
                        logger.warn('is mod_turncredentials or similar installed and configured?');
                    }
                );
            });
    }

    /**
     * Parses response when querying for services using urn:xmpp:extdisco:1 or urn:xmpp:extdisco:2.
     * Stores results in jvbIceConfig and p2pIceConfig.
     * @param res The response iq.
     * @return {boolean} Whether something was processed from the supplied message.
     */
    onReceiveStunAndTurnCredentials(res) {
        const iceservers = [];

        res.querySelectorAll(':scope >services>service').forEach(el => {
            const dict = {};
            const type = el.getAttribute('type');

            switch (type) {
            case 'stun':
                dict.urls = `stun:${el.getAttribute('host')}`;
                if (el.getAttribute('port')) {
                    dict.urls += `:${el.getAttribute('port')}`;
                }
                iceservers.push(dict);
                break;
            case 'turn':
            case 'turns': {
                dict.urls = `${type}:`;
                dict.username = el.getAttribute('username');
                dict.urls += el.getAttribute('host');
                const port = el.getAttribute('port');

                if (port) {
                    dict.urls += `:${el.getAttribute('port')}`;
                }
                const transport = el.getAttribute('transport');

                if (transport && transport !== 'udp') {
                    dict.urls += `?transport=${transport}`;
                }

                dict.credential = el.getAttribute('password')
                        || dict.credential;
                iceservers.push(dict);
                break;
            }
            }
        });

        const options = this.xmpp.options;

        // Shuffle ICEServers for loadbalancing
        for (let i = iceservers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = iceservers[i];

            iceservers[i] = iceservers[j];
            iceservers[j] = temp;
        }

        let filter;

        if (options.useTurnUdp) {
            filter = s => s.urls.startsWith('turn');
        } else {
            // By default we filter out STUN and TURN/UDP and leave only TURN/TCP.
            filter = s => s.urls.startsWith('turn') && (s.urls.indexOf('transport=tcp') >= 0);
        }

        this.jvbIceConfig.iceServers = iceservers.filter(filter);
        this.p2pIceConfig.iceServers = iceservers;

        return iceservers.length > 0;
    }

    /**
     * Returns the data saved in 'updateLog' in a format to be logged.
     */
    getLog() {
        const data = {};

        Object.keys(this.sessions).forEach(sid => {
            const session = this.sessions[sid];
            const pc = session.peerconnection;

            if (pc && pc.updateLog) {
                // FIXME: should probably be a .dump call
                data[`jingle_${sid}`] = {
                    updateLog: pc.updateLog,
                    stats: pc.stats,
                    url: window.location.href
                };
            }
        });

        return data;
    }
}

/* eslint-enable newline-per-chained-call */
