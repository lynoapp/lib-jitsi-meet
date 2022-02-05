/**
 * The errors for the conference.
 */
/**
 * Indicates that client must be authenticated to create the conference.
 */
export declare const AUTHENTICATION_REQUIRED = "conference.authenticationRequired";
/**
 * Indicates that chat error occurred.
 */
export declare const CHAT_ERROR = "conference.chatError";
/**
 * Indicates that a settings error occurred.
 */
export declare const SETTINGS_ERROR = "conference.settingsError";
/**
 * Indicates that conference has been destroyed.
 */
export declare const CONFERENCE_DESTROYED = "conference.destroyed";
/**
 * Indicates that max users limit has been reached.
 */
export declare const CONFERENCE_MAX_USERS = "conference.max_users";
/**
 * Indicates that a connection error occurred when trying to join a conference.
 */
export declare const CONNECTION_ERROR = "conference.connectionError";
/**
 * Indicates that the client has been forced to restart by jicofo when the
 * conference was migrated from one bridge to another.
 */
export declare const CONFERENCE_RESTARTED = "conference.restarted";
/**
 * Indicates that a connection error is due to not allowed,
 * occurred when trying to join a conference.
 */
export declare const NOT_ALLOWED_ERROR = "conference.connectionError.notAllowed";
/**
 * Indicates that a connection error is due to not allowed,
 * occurred when trying to join a conference, only approved members are allowed to join.
 */
export declare const MEMBERS_ONLY_ERROR = "conference.connectionError.membersOnly";
/**
 * Indicates that a connection error is due to denied access to the room,
 * occurred after joining a lobby room and access is denied by the room moderators.
 */
export declare const CONFERENCE_ACCESS_DENIED = "conference.connectionError.accessDenied";
/**
 * Indicates that focus error happened.
 */
export declare const FOCUS_DISCONNECTED = "conference.focusDisconnected";
/**
 * Indicates that focus left the conference.
 */
export declare const FOCUS_LEFT = "conference.focusLeft";
/**
 * Indicates that graceful shutdown happened.
 */
export declare const GRACEFUL_SHUTDOWN = "conference.gracefulShutdown";
/**
 * Indicates that the media connection has failed.
 */
export declare const ICE_FAILED = "conference.iceFailed";
/**
 * Indicates that the versions of the server side components are incompatible
 * with the client side.
 */
export declare const INCOMPATIBLE_SERVER_VERSIONS = "conference.incompatible_server_versions";
/**
 * Indicates that offer/answer had failed.
 */
export declare const OFFER_ANSWER_FAILED = "conference.offerAnswerFailed";
/**
 * Indicates that password cannot be set for this conference.
 */
export declare const PASSWORD_NOT_SUPPORTED = "conference.passwordNotSupported";
/**
 * Indicates that a password is required in order to join the conference.
 */
export declare const PASSWORD_REQUIRED = "conference.passwordRequired";
/**
 * Indicates that reservation system returned error.
 */
export declare const RESERVATION_ERROR = "conference.reservationError";
/**
 * Indicates that there is no available videobridge.
 */
export declare const VIDEOBRIDGE_NOT_AVAILABLE = "conference.videobridgeNotAvailable";
/**
 * JitsiConferenceErrors Enum
 */
export declare enum JitsiConferenceErrors {
    AUTHENTICATION_REQUIRED = "conference.authenticationRequired",
    CHAT_ERROR = "conference.chatError",
    SETTINGS_ERROR = "conference.settingsError",
    CONFERENCE_DESTROYED = "conference.destroyed",
    CONFERENCE_MAX_USERS = "conference.max_users",
    CONNECTION_ERROR = "conference.connectionError",
    CONFERENCE_RESTARTED = "conference.restarted",
    NOT_ALLOWED_ERROR = "conference.connectionError.notAllowed",
    MEMBERS_ONLY_ERROR = "conference.connectionError.membersOnly",
    CONFERENCE_ACCESS_DENIED = "conference.connectionError.accessDenied",
    FOCUS_DISCONNECTED = "conference.focusDisconnected",
    FOCUS_LEFT = "conference.focusLeft",
    GRACEFUL_SHUTDOWN = "conference.gracefulShutdown",
    ICE_FAILED = "conference.iceFailed",
    INCOMPATIBLE_SERVER_VERSIONS = "conference.incompatible_server_versions",
    OFFER_ANSWER_FAILED = "conference.offerAnswerFailed",
    PASSWORD_NOT_SUPPORTED = "conference.passwordNotSupported",
    PASSWORD_REQUIRED = "conference.passwordRequired",
    RESERVATION_ERROR = "conference.reservationError",
    VIDEOBRIDGE_NOT_AVAILABLE = "conference.videobridgeNotAvailable"
}