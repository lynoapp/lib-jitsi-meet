import JitsiConference from '../../JitsiConference';

declare class E2EEncryption {
  constructor( conference: JitsiConference );
  static isSupported: (
    config: {
      enableEncodedTransformSupport?: boolean;
      e2ee?: { externallyManagedKey?: boolean; };
      testing?: { disableE2EE?: boolean; };
    },
  ) => boolean;
  isEnabled: () => boolean;
  setEnabled: ( enabled: boolean ) => Promise<void>;
}
