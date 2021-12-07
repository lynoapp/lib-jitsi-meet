/**
 * A global module for accessing information about different feature flags state.
 */
declare class FeatureFlags {
  /**
   * Configures the module.
   */
  init(flags: {
    sourceNameSignaling: boolean;
  }): void;
  /**
   * Checks if the source name signaling is enabled.
   */
  isSourceNameSignalingEnabled(): boolean;
}

declare var _default: FeatureFlags;
export default _default;
