# Jitsi Meet API library (with import & TypeScript support)

You can use Jitsi Meet API to create Jitsi Meet video conferences with a custom GUI.

Changes to the [original repo](https://github.com/jitsi/lib-jitsi-meet):

- export unbundled code
- TypeScript support
- published to [npm](https://www.npmjs.com/package/@solyd/lib-jitsi-meet)
- updated dependencies
- a few bug fixes (see pull requests)

## Installation

```bash
yarn add @solyd/lib-jitsi-meet
```

### Usage

```typescript
import JitsiMeetJS from '@solyd/lib-jitsi-meet';

JitsiMeetJS.init(initOptions);
const connection = new JitsiMeetJS.JitsiConnection(null, token, options);
```

### Alternative useage

We also provide a prebundled version with jQuery bundled in.

```typescript
import `@solyd/lib-jitsi-meet/dist/umd/lib-jitsi-meet.min.js`
```


## Building the sources

NOTE: you need Node.js >= 14, npm >= 7 and yarn >= 1

To build the library, just type:
```bash
yarn install
yarn build
```

To lint:
```
yarn lint
```
and to run unit tests:
```
yarn test
```
if you need to rebuild lib-jitsi-meet.min.js
```
yarn build
```

### Release

```
yarn release
```
