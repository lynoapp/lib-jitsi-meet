import JitsiTrack from './JitsiTrack';
import { CameraFacingMode } from '../../service/RTC/CameraFacingMode';
import { MediaType } from '../../service/RTC/MediaType';
import { VideoType } from '../../service/RTC/VideoType';
import TraceablePeerConnection from './TraceablePeerConnection';
import JitsiConference from '../../JitsiConference';

export default class JitsiLocalTrack extends JitsiTrack {
  constructor( trackInfo: { rtcId: number, stream: unknown, track: unknown, mediaType: MediaType, videoType: VideoType, effects: unknown, resolution: unknown, deviceId: string, facingMode: CameraFacingMode, sourceId: string } ) // TODO:
  /**
   * Get the duration of the track in seconds
   */
  getCameraFacingMode: () => CameraFacingMode | undefined;
  getDeviceId: () => string;
  getDuration(): number;
  getParticipantId: () => string;
  getSourceName: () => string | null;
  isEnded: () => boolean;
  isMuted: () => boolean;
  isReceivingData: () => boolean;
  mute: () => Promise<void>;
  onByteSentStatsReceived: (tpc: TraceablePeerConnection, bytesSent: number) => void;
  setConference(conference: JitsiConference): void;
  setEffect: ( effect: unknown ) => Promise<unknown>; // TODO:
  setSourceName: ( name: string ) => void;
  stopStream: () => void;
  unmute: () => Promise<void>;
  toString: () => string;
}
