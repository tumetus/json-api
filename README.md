# Mock json api

This is a simple JSON api that returns mock data.

Created using Next.js.

Endpoints can be seen from the frontpage by visiting localhost:3001 when server is started.

## Usage

```
yarn install
yarn build
yarn start
```

Builds the server and runs it. The Todo api saves the todos in memory so that is why the server needs to be built instead of run in dev mode (to prevent rebuilding -> loss of data).
