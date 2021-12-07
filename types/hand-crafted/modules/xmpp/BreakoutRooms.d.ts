import ChatRoom from './ChatRoom';

/**
 * Helper class for handling breakout rooms.
 */
 export default class BreakoutRooms {
  /**
   * Constructs lobby room.
   *
   * @param {ChatRoom} room the room we are in.
   */
  constructor(room: ChatRoom);
  room: ChatRoom;
  /**
   * Stops listening for events.
   */
  dispose(): void;
  /**
   * Creates a breakout room with the given subject.
   *
   * @param {string} subject - A subject for the breakout room.
   */
  createBreakoutRoom(subject: string): void;
  /**
   * Removes a breakout room.
   *
   * @param {string} breakoutRoomJid - JID of the room to be removed.
   */
  removeBreakoutRoom(breakoutRoomJid: string): void;
  /**
   * Sends the given participant to the given room.
   *
   * @param {string} participantJid - JID of the participant to be sent to a room.
   * @param {string} roomJid - JID of the target room.
   */
  sendParticipantToRoom(participantJid: string, roomJid: string): void;
  /**
   * Whether Breakout Rooms support is enabled in the backend or not.
   */
  isSupported(): boolean;
  /**
   * Gets the address of the Breakout Rooms XMPP component.
   *
   * @returns The address of the component.
   */
  getComponentAddress(): string;
  /**
   * Checks whether this room is a breakout room.
   *
   * @returns True if the room is a breakout room, false otherwise.
   */
  isBreakoutRoom(): boolean;
  /**
   * Gets the main room's JID associated with this breakout room.
   *
   * @returns The main room JID.
   */
  getMainRoomJid(): string;
}