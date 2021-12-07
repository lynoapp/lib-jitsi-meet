import ChatRoom from './ChatRoom';

export default class Lobby {
  constructor( room: ChatRoom );
  isSupported: () => boolean;
  enable: () => Promise<unknown>; // TODO:
  disable: () => void;
  leave: () => Promise<void>;
  setLobbyRoomJid: ( jid: string ) => void;
  join: ( displayName: string, email?: string ) => Promise<void>;
  denyAccess: ( id: string ) => void;
  approveAccess: ( id: string ) => void;
}
