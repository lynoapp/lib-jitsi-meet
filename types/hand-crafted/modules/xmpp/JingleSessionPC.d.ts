import JingleSession from './JingleSession';
import XmppConnection from './XmppConnection';
import JitsiLocalTrack from '../RTC/JitsiLocalTrack';
import { CodecMimeType } from '../../service/RTC/CodecMimeType';
import JitsiRemoteTrack from '../RTC/JitsiRemoteTrack';

export type JingleSessionPCOptions = {
  /**
   * - A/B testing related options (ask George).
   */
  abTesting: {
      enableSuspendVideoTest: boolean;
  };
  /**
   * - Described in the config.js[1].
   */
  disableH264: boolean;
  /**
   * - Described in the config.js[1].
   */
  disableRtx: boolean;
  /**
   * - Described in the config.js[1].
   */
  disableSimulcast: boolean;
  /**
   * - Set to true when the insertable streams constraints is to be enabled
   * on the PeerConnection.
   */
  enableInsertableStreams: boolean;
  /**
   * - Described in the config.js[1].
   */
  enableLayerSuspension: boolean;
  /**
   * - it's an option used in the tests. Set to
   * <tt>true</tt> to block any real candidates and make the ICE fail.
   */
  failICE: boolean;
  /**
   * - Described in the config.js[1].
   */
  gatherStats: boolean;
  /**
   * - Peer to peer related options (FIXME those could be
   * fetched from config.p2p on the upper level).
   */
  p2p: object;
  /**
   * - Described in the config.js[1].
   */
  preferH264: boolean;
  /**
   * - Testing and/or experimental options.
   */
  testing: object;
  /**
   * - Described in the config.js[1].
   */
  webrtcIceUdpDisable: boolean;
  /**
   * - Described in the config.js[1].
   *
   * [1]: https://github.com/jitsi/jitsi-meet/blob/master/config.js
   */
  webrtcIceTcpDisable: boolean;
};

export default class JingleSessionPC extends JingleSession {
  static parseVideoSenders: ( jingleContents: JQuery ) => string | null;
  static parseMaxFrameHeight: ( jingleContents: JQuery ) => number | null;
  constructor( sid: string, localJid: string, remoteJid: string, connection: XmppConnection, mediaConstraints: unknown, pcConfig: unknown, isP2P: boolean, isInitiator: boolean ); // TODO:
  doInitialize: ( options: JingleSessionPCOptions ) => void;
  getRemoteRecvMaxFrameHeight: () => number | undefined;
  sendIceCandidate: ( candidate: RTCIceCandidate ) => void;
  sendIceCandidates: ( candidates: RTCIceCandidate[] ) => void;
  sendIceFailedNotification: () => void;
  addIceCandidates: ( elem: unknown ) => void; // TODO:
  readSsrcInfo: ( contents: unknown ) => void; // TODO:
  generateRecvonlySsrc: () => void;
  getConfiguredVideoCodec: () => CodecMimeType;
  acceptOffer: ( jingleOffer: JQuery, success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown, localTracks?: JitsiLocalTrack[] ) => void; // TODO:
  invite: ( localTracks?: JitsiLocalTrack[] ) => void;
  sendSessionInitiate: ( offerSdp: string ) => void;
  setAnswer: ( jingleAnswer: unknown ) => void; // TODO:
  setOfferAnswerCycle: ( jingleOfferAnswerIq: JQuery, success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown, localTracks?: JitsiLocalTrack[] ) => void; // TODO:
  setVideoCodecs: ( preferred?: CodecMimeType, disabled?: CodecMimeType ) => void;
  replaceTransport: ( jingleOfferElem: unknown, success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown ) => void; // TODO:
  sendSessionAccept: ( success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown ) => void; // TODO:
  sendContentModify: () => void;
  setReceiverVideoConstraint: ( maxFrameHeight: number ) => void;
  sendTransportAccept: ( localSDP: unknown, success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown ) => void; // TODO:
  sendTransportReject: ( success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown ) => void; // TODO:
  setSenderVideoConstraint: ( maxFrameHeight: number, sourceName?: string ) => Promise<unknown>; // TODO:
  terminate: ( success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown, options: { reason: string, reasonDescription: string, requestRestart?: boolean, sendSessionTerminate?: boolean } ) => void; // TODO:
  onTerminated: ( reasonCondition: unknown, reasonText: unknown ) => void; // TODO:
  onXmppStatusChanged: ( status: Strophe.Status ) => void;
  addRemoteStream: ( elem: unknown ) => void; // TODO:
  removeRemoteStream: ( elem: unknown ) => void; // TODO:
  removeRemoteStreamsOnLeave: ( id: string ) => Promise<JitsiRemoteTrack>;
  addTrack: (localTrack: JitsiLocalTrack) => Promise<void>;
  replaceTrack: ( oldTrack: JitsiLocalTrack | null, newTrack: JitsiLocalTrack | null ) => Promise<unknown>; // TODO:
  addTrackAsUnmute: ( track: JitsiLocalTrack ) => Promise<unknown>; // TODO:
  removeTrackAsMute: ( track: JitsiLocalTrack ) => Promise<unknown>; // TODO:
  setMediaTransferActive: ( audioActive: boolean, videoActive: boolean ) => Promise<unknown>; // TODO:
  modifyContents: ( jingleContents: JQuery ) => void;
  notifyMySSRCUpdate: ( oldSDP: unknown, newSDP: unknown ) => void; // TODO:
  newJingleErrorHandler: ( request: unknown, failureCb: ( error: Error ) => void ) => ( this: JingleSessionPC ) => unknown; // TODO:
  getIceConnectionState: () => unknown; // TODO:
  close: () => void;
  toString: () => string;
}
