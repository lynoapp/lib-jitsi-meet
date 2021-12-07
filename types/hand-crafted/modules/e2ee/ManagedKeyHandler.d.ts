import JitsiConference from '../../JitsiConference';
import { KeyHandler } from './KeyHandler';

/**
 * This module integrates {@link E2EEContext} with {@link OlmAdapter} in order to distribute the keys for encryption.
 */
 export class ManagedKeyHandler extends KeyHandler {
  /**
   * Build a new AutomaticKeyHandler instance, which will be used in a given conference.
   */
  constructor(conference: JitsiConference);
}
