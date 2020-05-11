# trollo-api

This is REST API for trollo budget control app.

## Development

In order to run the app in dev mode run:

```
npm run dev
```

in another terminal window:

```
npm start
```

### Sidenotes
Application uses HMR in development in order to speed up Typescript building and enhance user experience. Chunk files are built in dist folder together with the output `index.js` file. They are replaced by new `[id].[hash].filename.js` files after every change. In order to keep `./dist` folder clean, chunk files are moved to `./dist/.hot/` directory.