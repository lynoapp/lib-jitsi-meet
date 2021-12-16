import JitsiLocalTrack from '../RTC/JitsiLocalTrack';

export default class ProxyConnectionPC {
  constructor( options?: {
    pcConfig: unknown; // TODO:
    isInitiator: boolean;
    onRemoteStream: ( params: unknown ) => unknown; // TODO:
    peerJid: string;
    receiveVideo: boolean;
    onSendMessage: ( params: unknown ) => unknown; // TODO:
  } );
  getPeerJid: () => string;
  processMessage: ( jingle: Element ) => void;
  start: ( localTracks?: JitsiLocalTrack[] ) => void;
  stop: () => void;
}
