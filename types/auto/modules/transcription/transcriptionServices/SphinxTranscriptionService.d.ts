/**
 * Implements a TranscriptionService for a Sphinx4 http server
 */
export default class SphinxService extends AbstractTranscriptionService {
    url: string;
    /**
     * Overrides the sendRequest method from AbstractTranscriptionService
     * it will send the audio stream the a Sphinx4 server to get the transcription
     *
     * @param audioFileBlob the recorder audio stream an a single Blob
     * @param callback the callback function retrieving the server response
     */
    sendRequest(audioFileBlob: any, callback: any): void;
}
import AbstractTranscriptionService from "./AbstractTranscriptionService";
