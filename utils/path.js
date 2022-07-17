// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolveRelativeAppRoot } = require('./resolvePath');

module.exports = {
  root: resolveRelativeAppRoot('.'),
  dist: resolveRelativeAppRoot('dist'),
  clientDist: resolveRelativeAppRoot('dist/client'),
  serverDist: resolveRelativeAppRoot('dist/server'),
  public: resolveRelativeAppRoot('src/public'),
  client: resolveRelativeAppRoot('dist/client/index.html'),
  src: resolveRelativeAppRoot('src'),
  clientAppTsx: resolveRelativeAppRoot('src/app/index.tsx'),
  htmlTemplate: resolveRelativeAppRoot('src/index.html'),
  serverAppTs: resolveRelativeAppRoot('src/index.ts'),
};
