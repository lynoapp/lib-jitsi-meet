import Listenable from '../../modules/util/Listenable';
import { VideoType } from '../../service/RTC/VideoType';
import { MediaType } from './MediaType';

export type PeerMediaInfo = {
  muted: boolean;
  videoType: VideoType | undefined;
}

export default class SignalingLayer extends Listenable {
  constructor( eventEmitter?: unknown ); // TODO:
  getSSRCOwner: ( ssrc: number ) => string | null;
  getPeerMediaInfo: ( owner: string, mediaType: MediaType ) => PeerMediaInfo | null;
}
