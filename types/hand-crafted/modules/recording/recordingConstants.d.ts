declare namespace recordingConstants {
  enum error {
    BUSY = 'busy',
    ERROR = 'error',
    RESOURCE_CONSTRAINT = 'resource-constraint',
    UNEXPECTED_REQUEST = 'unexpected-request',
    SERVICE_UNAVAILABLE = 'service-unavailable'
  }

  enum mode {
    FILE = 'file',
    STREAM = 'stream'
  }

  enum status {
    OFF = 'off',
    ON = 'on',
    PENDING = 'pending'
  }
}

export default recordingConstants;