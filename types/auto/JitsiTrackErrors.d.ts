/**
 * The errors for the JitsiTrack objects.
 */
/**
 * An error which indicates that some of requested constraints in
 * getUserMedia call were not satisfied.
 */
export declare const CONSTRAINT_FAILED = "gum.constraint_failed";
/**
 * A generic error which indicates an error occurred while selecting
 * a DesktopCapturerSource from the electron app.
 */
export declare const ELECTRON_DESKTOP_PICKER_ERROR = "gum.electron_desktop_picker_error";
/**
 * An error which indicates a custom desktop picker could not be detected
 * for the electron app.
 */
export declare const ELECTRON_DESKTOP_PICKER_NOT_FOUND = "gum.electron_desktop_picker_not_found";
/**
 * Generic getUserMedia error.
 */
export declare const GENERAL = "gum.general";
/**
 * An error which indicates that requested device was not found.
 */
export declare const NOT_FOUND = "gum.not_found";
/**
 * An error which indicates that user denied permission to share requested
 * device.
 */
export declare const PERMISSION_DENIED = "gum.permission_denied";
/**
 * Generic error for screensharing failure.
 */
export declare const SCREENSHARING_GENERIC_ERROR = "gum.screensharing_generic_error";
/**
 * An error which indicates that user canceled screen sharing window
 * selection dialog.
 */
export declare const SCREENSHARING_USER_CANCELED = "gum.screensharing_user_canceled";
/**
 * Indicates that the timeout passed to the obtainAudioAndVideoPermissions has expired without GUM resolving.
 */
export declare const TIMEOUT = "gum.timeout";
/**
 * An error which indicates that track has been already disposed and cannot
 * be longer used.
 */
export declare const TRACK_IS_DISPOSED = "track.track_is_disposed";
/**
 * An error which indicates that track has no MediaStream associated.
 */
export declare const TRACK_NO_STREAM_FOUND = "track.no_stream_found";
/**
 * An error which indicates that requested video resolution is not supported
 * by a webcam.
 */
export declare const UNSUPPORTED_RESOLUTION = "gum.unsupported_resolution";
/**
 * JitsiTrackErrors Enum
 */
export declare enum JitsiTrackErrors {
    CONSTRAINT_FAILED = "gum.constraint_failed",
    ELECTRON_DESKTOP_PICKER_ERROR = "gum.electron_desktop_picker_error",
    ELECTRON_DESKTOP_PICKER_NOT_FOUND = "gum.electron_desktop_picker_not_found",
    GENERAL = "gum.general",
    NOT_FOUND = "gum.not_found",
    PERMISSION_DENIED = "gum.permission_denied",
    SCREENSHARING_GENERIC_ERROR = "gum.screensharing_generic_error",
    SCREENSHARING_USER_CANCELED = "gum.screensharing_user_canceled",
    TIMEOUT = "gum.timeout",
    TRACK_IS_DISPOSED = "trac =track_is_disposed",
    TRACK_NO_STREAM_FOUND = "track.no_stream_found",
    UNSUPPORTED_RESOLUTION = "gum.unsupported_resolution"
}
