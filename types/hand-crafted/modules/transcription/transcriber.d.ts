
import AudioRecorder from './audioRecorder';
import SphinxService from './transcriptionServices/SphinxTranscriptionService';
import JitsiTrack from '../RTC/JitsiTrack';

export default class Transcriber {
  audioRecorder: AudioRecorder;
  transcriptionService: SphinxService;
  counter: number;
  startTime: Date;
  transcription: string;
  callback: Function;
  results: unknown[]; // TODO:
  state: string;
  lineLength: number;
  start: () => void;
  stop: () => void;
  maybeMerge: () => void;
  merge: () => void;
  updateTranscription: ( word: string, name?: string ) => void;
  addTrack: ( track: JitsiTrack ) => void;
  removeTrack: ( track: JitsiTrack ) => void;
  getTranscription: () => string;
  getState: () =>  string;
  reset: () => void;
}
