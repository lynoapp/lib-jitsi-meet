import JitsiTrack from "../RTC/JitsiTrack";

/**
 * A TrackRecorder object holds all the information needed for recording a
 * single JitsiTrack (either remote or local)
 * @param track The JitsiTrack the object is going to hold
 */
 export default class TrackRecorder {
  constructor(track: JitsiTrack);
  track: JitsiTrack;
  recorder: MediaRecorder;
  data: unknown[]; // TODO:
  name?: string;
  startTime: Date;
}
