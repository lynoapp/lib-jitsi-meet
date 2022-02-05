export default class RecordingResult {
  constructor( blob: Blob, name: string, startTime: Date, wordArray: string[] );
  readonly blob: Blob;
  readonly name: string;
  readonly startTime: Date;
  readonly wordArray: string[];
}
