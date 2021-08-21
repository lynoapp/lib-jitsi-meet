# Jitsi Meet API library (with import & TypeScript support)

You can use Jitsi Meet API to create Jitsi Meet video conferences with a custom GUI.

Changes to the [original repo](https://github.com/jitsi/lib-jitsi-meet):

- export unbundled code
- TypeScript support
- published to [npm](https://www.npmjs.com/package/@lyno/lib-jitsi-meet)
- updated dependencies

## Installation

```bash
yarn add @lyno/lib-jitsi-meet
```

```typescript
import JitsiMeetJS from '@lyno/lib-jitsi-meet';

JitsiMeetJS.init(initOptions);
const connection = new JitsiMeetJS.JitsiConnection(null, token, options);
```

### Alternative use

We also provide a prebundled version with jQuery bundled in.

```typescript
import `@lyno/lib-jitsi-meet/lib-jitsi-meet.min.js`
```


## Building the sources

NOTE: you need Node.js >= 12 and npm >= 6

To build the library, just type:

```bash
yarn install
yarn build
```

### Release

```
yarn release
```
