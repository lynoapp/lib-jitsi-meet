import JitsiConference from '../../JitsiConference';
import TrackRecorder from './trackRecorder';
import JitsiTrack from '../RTC/JitsiTrack';

type AudioFileTypes = 'audio/webm' | 'audio/ogg';

export default class AudioRecorder {
  constructor( jitsiConference: JitsiConference );
  recorders: unknown[]; // TODO:
  fileType: AudioFileTypes;
  isRecording: boolean;
  jitsiConference: JitsiConference;
  addTrack: ( track: JitsiTrack ) => void;
  instantiateTrackRecorder: ( track: JitsiTrack ) => TrackRecorder;
  removeTrack: ( track: JitsiTrack ) => void;
  updateNames: () => void;
  start: () => void;
  stop: () => void;
  download: () => void;
  getRecordingResults: () => Array<unknown>; // TODO:
  getFileType: () => string;
  determineCorrectFileType: () => AudioFileTypes;
}
