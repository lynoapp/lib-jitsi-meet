/**
 * Notifies about audio level in RTP statistics by SSRC.
 *
 * @param ssrc - The synchronization source identifier (SSRC) of the
 * endpoint/participant whose audio level is being reported.
 * @param {number} audioLevel - The audio level of <tt>ssrc</tt> according to
 * RTP statistics.
 * @param {boolean} isLocal - <tt>true</tt> if <tt>ssrc</tt> identifies the
 * local endpoint/participant; otherwise, <tt>false</tt>.
 */
export declare const AUDIO_LEVEL = "statistics.audioLevel";
/**
 * An event fired just before the statistics module gets disposes and it's
 * the last chance to submit some logs that will end up in stats services like
 * CallStats (if enabled).
 */
export declare const BEFORE_DISPOSED = "statistics.before_disposed";
/**
 * An event carrying all statistics by ssrc.
 */
export declare const BYTE_SENT_STATS = "statistics.byte_sent_stats";
/**
 * An event carrying connection statistics.
 *
 * @param {object} connectionStats - The connection statistics carried by the
 * event such as <tt>bandwidth</tt>, <tt>bitrate</tt>, <tt>packetLoss</tt>,
 * <tt>resolution</tt>, and <tt>transport</tt>.
 */
export declare const CONNECTION_STATS = "statistics.connectionstats";
/**
 * An event carrying performance stats.
 */
export declare const LONG_TASKS_STATS = "statistics.long_tasks_stats";
/**
 * Events Enum
 */
export declare enum Events {
    AUDIO_LEVEL = "statistics.audioLevel",
    BEFORE_DISPOSED = "statistics.before_disposed",
    BYTE_SENT_STATS = "statistics.byte_sent_stats",
    CONNECTION_STATS = "statistics.connectionstats",
    LONG_TASKS_STATS = "statistics.long_tasks_stats"
}
