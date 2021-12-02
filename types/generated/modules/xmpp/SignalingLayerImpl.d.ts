/**
 * Default XMPP implementation of the {@link SignalingLayer} interface. Obtains
 * the data from the MUC presence.
 */
export default class SignalingLayerImpl extends SignalingLayer {
    /**
     * Creates new instance.
     */
    constructor();
    /**
     * A map that stores SSRCs of remote streams. And is used only locally
     * We store the mapping when jingle is received, and later is used
     * onaddstream webrtc event where we have only the ssrc
     * FIXME: This map got filled and never cleaned and can grow during long
     * conference
     * @type {Map<number, string>} maps SSRC number to jid
     */
    ssrcOwners: Map<number, string>;
    /**
     *
     * @type {ChatRoom|null}
     */
    chatRoom: ChatRoom | null;
    /**
     * Sets the <tt>ChatRoom</tt> instance used and binds presence listeners.
     * @param {ChatRoom} room
     */
    setChatRoom(room: ChatRoom): void;
    _audioMuteHandler: (node: any, from: any) => void;
    _videoMuteHandler: (node: any, from: any) => void;
    _videoTypeHandler: (node: any, from: any) => void;
    /**
     * Set an SSRC owner.
     * @param {number} ssrc an SSRC to be owned
     * @param {string} endpointId owner's ID (MUC nickname)
     * @throws TypeError if <tt>ssrc</tt> is not a number
     */
    setSSRCOwner(ssrc: number, endpointId: string): void;
}
import SignalingLayer from "../../service/RTC/SignalingLayer";
