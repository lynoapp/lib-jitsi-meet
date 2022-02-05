import AbstractTranscriptionService from './AbstractTranscriptionService';

/**
 * Implements a TranscriptionService for a Sphinx4 http server
 */
export default class SphinxService extends AbstractTranscriptionService {
  url: string;
}
