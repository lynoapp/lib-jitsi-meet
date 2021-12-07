import Listenable from '../util/Listenable';
import E2EEContext, { E2EEcontextOptions } from './E2EEContext';
import JitsiConference from '../../JitsiConference';

/**
 * Abstract class that integrates {@link E2EEContext} with a key management system.
 */
 export class KeyHandler extends Listenable {
  /**
   * Build a new KeyHandler instance, which will be used in a given conference.
   * @param {JitsiConference} conference - the current conference.
   * @param {object} options - the options passed to {E2EEContext}, see implemention.
   */
  constructor(conference: JitsiConference, options?: E2EEcontextOptions);
  conference: JitsiConference;
  e2eeCtx: E2EEContext;
  enabled: boolean;
  /**
   * Indicates whether E2EE is currently enabled or not.
   *
   * @returns {boolean}
   */
  isEnabled(): boolean;
  /**
   * Enables / disables End-To-End encryption.
   *
   * @param {boolean} enabled - whether E2EE should be enabled or not.
   * @returns {void}
   */
  setEnabled(enabled: boolean): void;
  /**
   * Sets the key for End-to-End encryption.
   *
   * @returns {void}
   */
  setEncryptionKey(): void;
}
