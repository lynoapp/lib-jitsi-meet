import ChatRoom from './ChatRoom';

export default class Lobby {
  constructor( room: ChatRoom );
  isSupported: () => boolean;
  enable: () => Promise<unknown>; // TODO:
  disable: () => void;
  sendMessage: (message: object) => void;
  sendPrivateMessage: (id: string, message: string) => void;
  getLocalId: () => string;
  addMessageListener: (listener: Function) => Function;
  removeMessageHandler: (handler: Function) => void;
  leave: () => Promise<void>;
  setLobbyRoomJid: ( jid: string ) => void;
  join: ( displayName: string, email?: string ) => Promise<void>;
  denyAccess: ( id: string ) => void;
  approveAccess: ( id: string ) => void;
}
