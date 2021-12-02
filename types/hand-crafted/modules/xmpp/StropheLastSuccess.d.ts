import XmppConnection from './XmppConnection';

export default class LastRequestTracker {
  constructor();
  startTracking: ( xmppConnection: XmppConnection, stropheConnection: Strophe.Connection ) => void;
  getLastFailedMessage: () => string | null;
}
