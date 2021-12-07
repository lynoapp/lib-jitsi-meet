import JitsiConference from '../../JitsiConference';
import { KeyHandler } from './KeyHandler';

/**
 * This module integrates {@link E2EEContext} with {external} in order to set the keys for encryption.
 */
 export class ExternallyManagedKeyHandler extends KeyHandler {
  /**
   * Build a new ExternallyManagedKeyHandler instance, which will be used in a given conference.
   * @param conference - the current conference.
   */
  constructor(conference: JitsiConference);
  /**
   * Sets the key and index for End-to-End encryption.
   */
  setKey(keyInfo: {
    index: number;
    encryptionKey: CryptoKey;
  }): void;
}
