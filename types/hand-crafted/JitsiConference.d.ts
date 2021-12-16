import { JitsiConferenceEvents } from './JitsiConferenceEvents';
import JitsiConnection from './JitsiConnection';
import JitsiTrackError from './JitsiTrackError';
import JitsiParticipant from './JitsiParticipant';
import JitsiLocalTrack from './modules/RTC/JitsiLocalTrack';
import JitsiRemoteTrack from './modules/RTC/JitsiLocalTrack';
import JitsiTrack from './modules/RTC/JitsiTrack';
import Transcriber from './modules/transcription/transcriber';
import JitsiVideoSIPGWSession from './modules/videosipgw/JitsiVideoSIPGWSession';
import TraceablePeerConnection from './modules/RTC/TraceablePeerConnection';
import JingleSessionPC from './modules/xmpp/JingleSessionPC';
import { MediaType } from './service/RTC/MediaType';
import BreakoutRooms from './modules/xmpp/BreakoutRooms';

export default class JitsiConference {
  constructor( options: {
    name: string;
    config: {
      avgRtpStatsN?: number,
      enableIceRestart?: boolean,
      p2p?: {
        enabled: boolean,
        backToP2PDelay?: number
      },
      channelLastN?: number,
      forceJVB121Ratio?: number
    },
    connection: JitsiConnection
  } ); // TODO:
  join(password: string, replaceParticipant?: boolean): void;
  authenticateAndUpgradeRole: ( options: unknown ) => Promise<unknown>; // TODO:
  isJoined: () => boolean;
  isP2PEnabled: () => boolean;
  isP2PTestModeEnabled: () => boolean;
  leave: () => Promise<unknown>; // TODO:
  getName: () => string;
  getConnection: () => JitsiConnection;
  isAuthEnabled: () => boolean;
  isLoggedIn: () => boolean;
  getAuthLogin: () => unknown; // TODO:
  isExternalAuthEnabled: () => boolean;
  getExternalAuthUrl: ( urlForPopup: boolean ) => Promise<unknown>; // TODO: probably returns a Promise<string>
  getLocalTracks: ( mediaType: MediaType ) => JitsiLocalTrack[];
  getLocalAudioTrack: () => JitsiLocalTrack | null;
  getLocalVideoTrack: () => JitsiLocalTrack | null;
  getPerformanceStats: () => unknown | null; // TODO:
  on: ( eventId: JitsiConferenceEvents, handler: () => unknown ) => void; // TODO:
  off: ( eventId: JitsiConferenceEvents, handler: () => unknown ) => void; // TODO:
  addEventListener: ( eventId: JitsiConferenceEvents, handler: () => unknown ) => void; // TODO:
  removeEventListener: ( eventId: JitsiConferenceEvents, handler: () => unknown ) => void; // TODO:
  addCommandListener: ( command: string, handler: () => unknown ) => void; // TODO:
  removeCommandListener: ( command: string, handler: () => unknown ) => void; // TODO:
  // sendTextMessage: (message: string, elementName: string) => void; // obsolete
  // sendPrivateTextMessage: (id: string, message: string, elementName: string) => void; // obsolete
  sendCommand: ( name: string, values: unknown ) => void; // TODO:
  sendCommandOnce: ( name: string, values: unknown ) => void; // TODO:
  removeCommand: ( name: string ) => void;
  setDisplayName: ( name: string ) => void;
  setSubject: ( name: string ) => void;
  getTranscriber: () => Transcriber;
  getTranscriptionStatus: () => 'on' | 'off';
  addTrack: ( track: JitsiLocalTrack ) => Promise<JitsiLocalTrack>;
  onLocalTrackRemoved: ( track: JitsiLocalTrack ) => void;
  removeTrack: ( track: JitsiLocalTrack ) => Promise<void | JitsiTrackError>;
  replaceTrack: ( oldTrack: JitsiLocalTrack, newTrack: JitsiLocalTrack ) => Promise<void | JitsiTrackError>;
  getRole: () => string;
  isHidden: () => boolean | null;
  isModerator: () => boolean | null;
  lock: ( password: string ) => Promise<unknown | Error>;
  unlock: () => Promise<unknown | Error>;
  selectParticipant: ( participantId: string ) => void;
  selectParticipants: ( participantIds: string[] ) => void;
  getLastN: () => number;
  setLastN: ( lastN: number ) => void;
  isInLastN: ( participantId: string ) => boolean;
  getParticipants: () => JitsiParticipant[];
  getParticipantCount: ( countHidden?: boolean ) => number;
  getParticipantById: ( id: string ) => JitsiParticipant;
  grantOwner: ( id: string ) => void;
  revokeOwner: ( id: string ) => void;
  kickParticipant: ( id: string, reason?: string ) => void;
  muteParticipant: ( id: string, mediaType?: MediaType ) => void;
  onMemberJoined: ( jid: string, nick: string, role: string, isHidden: boolean, statsID?: unknown, status?: string, identity?: unknown, botType?: unknown, fullJid?: string, features?: unknown, isReplaceParticipant?: boolean ) => void;
  onMemberLeft: ( jid: string ) => void;
  onMemberKicked: ( isSelfPresence: boolean, actorId: string, kickedParticipantId?: string, reason?: string, isReplaceParticipant?: boolean ) => void;
  onLocalRoleChanged: ( role: string ) => void;
  onUserRoleChanged: ( jid: string, role: string ) => void;
  onDisplayNameChanged: ( jid: string, displayName: string ) => void;
  onRemoteTrackAdded: ( track: JitsiRemoteTrack ) => void;
  onCallAccepted: ( session: JingleSessionPC, answer: Element ) => void;
  onTransportInfo: ( session: JingleSessionPC, transportInfo: Element ) => void;
  onRemoteTrackRemoved: ( removedTrack: JitsiRemoteTrack ) => void;
  onIncomingCall: ( jingleSession: JingleSessionPC, jingleOffer: unknown, now: unknown ) => void;
  onCallEnded: ( jingleSession: JingleSessionPC, reasonCondition: string, reasonText: string ) => void;
  onSuspendDetected: ( jingleSession: JingleSessionPC ) => void;
  updateDTMFSupport: () => void;
  isDTMFSupported: () => boolean;
  myUserId: () => string;
  sendTones: ( tones: unknown, duration: unknown, pause: unknown ) => void; // TODO:
  startRecording: ( options: unknown ) => Promise<unknown>;
  stopRecording: ( sessionID: string ) => Promise<unknown>;
  isSIPCallingSupported: () => boolean;
  dial: ( number: string ) => Promise<unknown>;
  hangup: () => Promise<unknown>;
  startTranscriber: () => Promise<unknown>;
  stopTranscriber: () => Promise<unknown>;
  getPhoneNumber: () => string | null;
  getPhonePin: () => string | null;
  getMeetingUniqueId: () => string | undefined;
  getActivePeerConnection: () => TraceablePeerConnection | null;
  getConnectionState: () => string | null;
  setStartMutedPolicy: ( policy: { audio: boolean, video: boolean } ) => void;
  getStartMutedPolicy: () => { audio: boolean, video: boolean };
  isStartAudioMuted: () => boolean;
  isStartVideoMuted: () => boolean;
  getConnectionTimes: () => unknown;
  setLocalParticipantProperty: ( name: string, value: unknown ) => void;
  removeLocalParticipantProperty: ( name: string ) => void;
  getLocalParticipantProperty: ( name: string ) => unknown;
  sendFeedback: ( overallFeedback: number, detailedFeedback: unknown ) => Promise<unknown>;
  isCallstatsEnabled: () => boolean;
  getSsrcByTrack: ( track: JitsiTrack ) => number | undefined;
  isFocus: ( mucJid: string ) => boolean | null;
  sendApplicationLog: ( message: string ) => void;
  // sendEndpointMessage: (to: string, payload: unknown) => unknown; // TODO: deprecated
  // broadcastEndpointMessage: (payload: unknown) => void; // TODO: deprecated
  sendEndpointStatsMessage: ( payload: unknown ) => void; // TODO:
  sendMessage: ( message: string | unknown, to?: string, sendThroughVideobridge?: boolean ) => void; // TODO: JSDoc is incorrect
  isConnectionInterrupted: () => boolean;
  getProperty: ( key: string ) => unknown; // TODO:
  isP2PActive: () => boolean;
  getP2PConnectionState: () => string | null;
  setDesktopSharingFrameRate: (maxFps: number) => boolean;
  startP2PSession: () => void;
  stopP2PSession: (options: unknown) => void;
  getSpeakerStats: () => unknown; // TODO:
  /**
   * Sends a facial expression with its duration to the xmpp server.
   */
  sendFacialExpression: ( payload: object ) => void;
  setReceiverConstraints: ( videoConstraints: unknown ) => void; // TODO:
  setReceiverVideoConstraint: ( maxFrameHeight: number ) => void;
  setSenderVideoConstraint: ( maxFrameHeight: number ) => Promise<unknown>; // TODO:
  isE2EEEnabled: () => boolean;
  createVideoSIPGWSession: ( sipAddress: string, displayName: string ) => JitsiVideoSIPGWSession | Error;
  toggleE2EE: ( enabled: boolean ) => void;
  /**
   * Sets the key and index for End-to-End encryption.
   */
  setMediaEncryptionKey(keyInfo: {
    index: number;
    encryptionKey: CryptoKey;
  }): void;
  isLobbySupported: () => boolean;
  isMembersOnly: () => boolean;
  enableLobby: () => Promise<unknown>;
  disableLobby: () => void;
  joinLobby: ( displayName: string, email: string ) => Promise<never>;
  lobbyDenyAccess: ( id: string ) => void;
  lobbyApproveAccess: ( id: string ) => void;
  isAVModerationSupported(): boolean;
  enableAVModeration: ( mediaType: MediaType ) => void;
  disableAVModeration: ( mediaType: MediaType ) => void;
  avModerationApprove: ( mediaType: MediaType, id: string ) => void;
  avModerationReject: ( mediaType: MediaType, id: string ) => void;
  /**
   * Returns the breakout rooms manager object.
   */
  getBreakoutRooms(): BreakoutRooms;
}
