import JitsiConference from '../../JitsiConference';
import RTC from '../RTC/RTC';

declare class ReceiverVideoConstraints {
  readonly constraints: unknown; // TODO:
  updateLastN: ( value: number ) => boolean;
  updateReceiveResolution: ( maxFrameHeight: number ) => boolean;
  updateReceiverVideoConstraints: ( videoConstraints: ReceiverVideoConstraints ) => boolean; // TODO:
  updateSelectedEndpoints: ( ids: string[] ) => void; // TODO:
}

export default class ReceiveVideoController {
  constructor( conference: JitsiConference, rtc: RTC );
  getLastN: () => number;
  selectEndpoints: ( ids: unknown ) => unknown; // TODO:
  setLastN: ( value: number ) => void;
  setPreferredReceiveMaxFrameHeight: ( maxFrameHeight: number ) => void;
  setReceiverConstraints: ( constraints: ReceiverVideoConstraints ) => void;
}
