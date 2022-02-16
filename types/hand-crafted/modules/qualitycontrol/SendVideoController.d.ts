import JitsiConference from '../../JitsiConference';
import RTC from '../RTC/RTC';

export default class SendVideoController {
  constructor( conference: JitsiConference, rtc: RTC );
  setPreferredSendMaxFrameHeight: ( maxFrameHeight: number ) => Promise<void[]>;
}
