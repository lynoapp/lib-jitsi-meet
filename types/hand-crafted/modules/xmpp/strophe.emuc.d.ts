import ConnectionPluginListenable from './ConnectionPlugin';
import XMPP from './xmpp';

export default class MucConnectionPlugin extends ConnectionPluginListenable {
  constructor( xmpp: XMPP );
  init: ( connection: unknown ) => void; // TODO:
  createRoom: ( jid: string, password: string, options: unknown ) => void; // TODO:
  isRoomCreated: ( roomJid: string ) => boolean;
  doLeave: ( jid: string ) => void;
  onPresence: ( pres: unknown ) => boolean; // TODO:
  onPresenceUnavailable: ( pres: unknown ) => boolean; // TODO:
  onPresenceError: ( pres: unknown ) => boolean; // TODO:
  onMessage: ( msg: unknown ) => boolean; // TODO:
  onMute: ( iq: unknown ) => boolean; // TODO:
  onMuteVideo: ( iq: unknown ) => boolean; // TODO:
}
