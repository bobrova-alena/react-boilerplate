/* eslint-disable @typescript-eslint/no-var-requires */
const NodemonPlugin = require('nodemon-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const appPath = require('../utils/path');
const { resolveRelativeAppRoot } = require('../utils/resolvePath');

const DEV_MODE = process.env.MODE_ENV === 'development';

module.exports = {
  context: appPath.root,
  entry: {
    server: appPath.serverAppTs,
  },
  output: {
    path: appPath.serverDist,
    clean: true,
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  devtool: 'source-map',
  node: {
    global: false,
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name(module, chunks, cacheGroupKey) {
            return cacheGroupKey;
          },
        },
      },
    },
  },
  performance: {
    hints: DEV_MODE ? false : 'warning',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: DEV_MODE,
      formatter: 'basic',
    }),
    DEV_MODE &&
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        failOnError: false,
      }),
    new NodemonPlugin({
      watch: appPath.dist,
    }),
    new ESLintPlugin({
      files: resolveRelativeAppRoot('src/**/*.{ts,tsx}'),
    }),
  ].filter(Boolean),
};
