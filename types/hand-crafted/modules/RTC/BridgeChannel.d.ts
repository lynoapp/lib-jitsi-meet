import EventEmitter from '../../EventEmitter';
import { ReceiverVideoConstraints } from '../../modules/qualitycontrol/ReceiveVideoController';
import { SourceName } from '../../service/RTC/SignalingLayer';
import { BridgeVideoType } from '../../service/RTC/BridgeVideoType';

export default class BridgeChannel {
  constructor( peerconnection: unknown, wsUrl: unknown, emitter: EventEmitter<unknown> ); // TODO:
  mode: () => null | 'datachannel' | 'websocket';
  close: () => void;
  isOpen: () => boolean;
  sendMessage: ( to: string, payload: unknown ) => void; // TODO:
  sendSetLastNMessage: ( value: number ) => void;
  sendSelectedEndpointsMessage: ( endpointIds: string[] ) => void;
  sendReceiverVideoConstraintMessage: ( maxFrameHeightPixels: number ) => void;
  sendEndpointStatsMessage: ( payload: unknown ) => void; // TODO:
  sendNewReceiverVideoConstraintsMessage: ( constraints: ReceiverVideoConstraints ) => void; // TODO:
  /**
   * Sends a 'VideoTypeMessage' message via the bridge channel.
   *
   * @deprecated to be replaced with sendSourceVideoTypeMessage
   */
  sendVideoTypeMessage: ( videoType: BridgeVideoType ) => void;
  /**
   * Sends a 'VideoTypeMessage' message via the bridge channel.
   */
  sendSourceVideoTypeMessage(sourceName: SourceName, videoType: BridgeVideoType): void;
}
