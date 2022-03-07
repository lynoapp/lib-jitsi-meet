import { VideoSIPGWStateConstants } from './VideoSIPGWConstants';
import JitsiVideoSIPGWSession from './JitsiVideoSIPGWSession';
import ChatRoom from '../xmpp/ChatRoom';

declare class VideoSIPGW {
  constructor( chatRoom: ChatRoom );
  handleJibriSIPState: ( node: { attributes?: { state?: VideoSIPGWStateConstants, sipaddress?: string, failure_reason?: string } } ) => void;
  createVideoSIPGWSession: ( sipAddress: string, displayName: string ) => JitsiVideoSIPGWSession | Error;
  sessionStateChanged: ( event: { address: string, oldState: VideoSIPGWStateConstants, newState: VideoSIPGWStateConstants, displayName: string } ) => void;
}
