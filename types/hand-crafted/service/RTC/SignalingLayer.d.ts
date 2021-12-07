import Listenable from '../../modules/util/Listenable';
import { VideoType } from '../../service/RTC/VideoType';
import { MediaType } from './MediaType';

export type EndpointId = string;
export type SourceName = string;

export type SourceInfo = {
  sourceName: SourceName;
  muted?: boolean;
  videoType?: VideoType;
};

export type PeerMediaInfo = {
  muted: boolean;
  videoType?: VideoType;
}

export default class SignalingLayer extends Listenable {
  constructor( eventEmitter?: unknown ); // TODO:
  getSSRCOwner: ( ssrc: number ) => string | null;
  getPeerMediaInfo: ( owner: string, mediaType: MediaType ) => PeerMediaInfo | null;
  getPeerSourceInfo: ( owner: EndpointId, sourceName: SourceName ) => SourceInfo | undefined;
  getTrackSourceName: ( ssrc: number ) => SourceName | undefined;
}
