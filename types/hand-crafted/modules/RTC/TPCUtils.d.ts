import JitsiLocalTrack from './JitsiLocalTrack';
import { MediaType } from '../../service/RTC/MediaType';

export const HD_BITRATE: 2500000;
export const HD_SCALE_FACTOR: 1;
export const LD_SCALE_FACTOR: 4;
export const SD_SCALE_FACTOR: 2;
export const SIM_LAYER_RIDS: string[];

export default class TPCUtils {
  constructor(peerconnection: unknown); // TODO:
  ensureCorrectOrderOfSsrcs: ( description: unknown ) => RTCSessionDescription; // TODO:
  /**
   * Returns the transceiver associated with a given RTCRtpSender/RTCRtpReceiver.
   */
  findTransceiver(mediaType: MediaType, localTrack?: JitsiLocalTrack): RTCRtpTransceiver;
  insertUnifiedPlanSimulcastReceive: ( desc: { type: string, sdp: string } ) => RTCSessionDescription;
  addTrack: ( localTrack: JitsiLocalTrack, isInitiator: boolean ) => void;
  /**
   * Returns the calculated active state of the simulcast encodings based on the frame height requested for the send
   * stream. All the encodings that have a resolution lower than the frame height requested will be enabled.
   */
  calculateEncodingsActiveState: (localVideoTrack: JitsiLocalTrack, newHeight: number) => Array<boolean>;
  /**
   * Returns the calculates max bitrates that need to be configured on the simulcast encodings based on the video
   * type and other considerations associated with screenshare.
   */
  calculateEncodingsBitrates: (localVideoTrack: JitsiLocalTrack) => Array<number>;
  replaceTrack: ( oldTrack: JitsiLocalTrack, newTrack: JitsiLocalTrack ) => Promise<void>;
  setAudioTransferActive: ( active: boolean ) => void;
  setEncodings: ( track: JitsiLocalTrack ) => Promise<void>;
  setMediaTransferActive: ( mediaType: MediaType, active: boolean ) => void;
  setVideoTransferActive: ( active: boolean ) => void;
  updateEncodingsResolution: ( parameters: RTCRtpEncodingParameters ) => void;
}
