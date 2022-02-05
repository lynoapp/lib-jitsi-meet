/**
 * The pending Jingle session state which means the session as defined in
 * XEP-0166(before 'session-invite/session-accept' took place).
 *
 * @type {string}
 */
export declare const PENDING = "pending";
/**
 * The active Jingle session state as defined in XEP-0166
 * (after 'session-invite'/'session-accept').
 *
 * @type {string}
 */
export declare const ACTIVE = "active";
/**
 * The ended Jingle session state as defined in XEP-0166
 * (after 'session-terminate').
 * @type {string}
 */
export declare const ENDED = "ended";
/**
 * JingleSessionState Enum
 */
export declare enum JingleSessionState {
    PENDING = "pending",
    ACTIVE = "active",
    ENDED = "ended"
}
