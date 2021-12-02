import JitsiTrack from './JitsiTrack';
import { CameraFacingMode } from '../../service/RTC/CameraFacingMode';
import { MediaType } from '../../service/RTC/MediaType';
import { VideoType } from '../../service/RTC/VideoType';

export default class JitsiLocalTrack extends JitsiTrack {
  constructor( trackInfo: { rtcId: number, stream: unknown, track: unknown, mediaType: MediaType, videoType: VideoType, effects: unknown, resolution: unknown, deviceId: string, facingMode: CameraFacingMode, sourceId: string } ) // TODO:
  isEnded: () => boolean;
  setEffect: ( effect: unknown ) => Promise<unknown>; // TODO:
  mute: () => Promise<void>;
  unmute: () => Promise<void>;
  dispose: () => Promise<void>;
  isMuted: () => boolean;
  isLocal: () => true;
  getDeviceId: () => string;
  getParticipantId: () => string;
  getCameraFacingMode: () => CameraFacingMode | undefined;
  stopStream: () => void;
  isReceivingData: () => boolean;
  toString: () => string;
}
