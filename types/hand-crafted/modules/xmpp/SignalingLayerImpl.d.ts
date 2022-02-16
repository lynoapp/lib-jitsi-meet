import SignalingLayer, { PeerMediaInfo, SourceName } from '../../service/RTC/SignalingLayer';
import ChatRoom from './ChatRoom';
import { MediaType } from '../../service/RTC/MediaType';
import { VideoType } from '../../service/RTC/VideoType';

export const SOURCE_INFO_PRESENCE_ELEMENT: 'SourceInfo';

declare class SignalingLayerImpl extends SignalingLayer {
  constructor();
  setChatRoom: ( room: ChatRoom ) => void;
  getPeerMediaInfo: ( owner: string, mediaType: MediaType ) => PeerMediaInfo | null;
  getSSRCOwner: ( ssrc: number ) => string | null;
  setSSRCOwner: ( ssrc: number, endpointId: string ) => void;
  setTrackMuteStatus: ( sourceName: SourceName, muted: boolean ) => boolean;
  setTrackVideoType: ( sourceName: SourceName, videoType: VideoType ) => boolean;
  setTrackSourceName: ( ssrc: number, sourceName: SourceName ) => void;
}
