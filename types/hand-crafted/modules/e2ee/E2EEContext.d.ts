export interface E2EEcontextOptions {
  sharedKey?: boolean;
}

export default class E2EEcontext {
  /**
   * Build a new E2EE context instance, which will be used in a given conference.
   * @param {boolean} [options.sharedKey] - whether there is a uniques key shared amoung all participants.
   */
  constructor(options?: E2EEcontextOptions);
  /**
   * Cleans up all state associated with the given participant. This is needed when a
   * participant leaves the current conference.
   *
   * @param {string} participantId - The participant that just left.
   */
  cleanup: ( participantId: string ) => void;
  /**
   * Cleans up all state associated with all participants in the conference. This is needed when disabling e2ee.
   */
  cleanupAll(): void;
  handleReceiver: ( receiver: RTCRtpReceiver, kind: string, participantId: string ) => void;
  handleSender: ( sender: RTCRtpSender, kind: string, participantId: string ) => void;
  setKey: ( participantId: string, key: Uint8Array[] | boolean, keyIndex: number ) => void;
}
