export default class BrowserCapabilities {
  doesVideoMuteByStreamRemove: () => boolean;
  isChromiumBased: () => boolean;
  isIosBrowser: () => boolean;
  isWebKitBased: () => boolean;
  isTwa: () => boolean;
  isSupported: () => boolean;
  isUserInteractionRequiredForUnmute: () => boolean;
  supportsVideoMuteOnConnInterrupted: () => boolean;
  supportsBandwidthStatistics: () => boolean;
  supportsCodecPreferences: () => boolean;
  supportsDeviceChangeEvent: () => boolean;
  supportsLocalCandidateRttStatistics: () => boolean;
  supportsPerformanceObserver: () => boolean;
  supportsReceiverStats: () => boolean;
  supportsRTTStatistics: () => boolean;
  usesSdpMungingForSimulcast: () => boolean;
  usesAdapter: () => boolean;
  usesRidsForSimulcast: () => boolean;
  supportsGetDisplayMedia: () => boolean;
  supportsEncodedTransform: () => boolean;
  supportsInsertableStreams: () => boolean;
  supportsAudioRed: () => boolean;
  supportsUnifiedPlan: () => boolean;
  supportsVADDetection: () => boolean;
}
