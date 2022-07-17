/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const createStyledComponentsTransformer =
  require('typescript-plugin-styled-components').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { DefinePlugin } = require('webpack');
const appPath = require('../utils/path');
const resolveRelativeAppRoot = require('../utils/resolvePath').resolveRelativeAppRoot;

function getName(filename) {
  const { name, ext } = path.parse(filename);
  return !ext ? name : getName(name);
}

const styledComponentsTransformer = createStyledComponentsTransformer({
  getDisplayName: (filename, bindingName) => getName(filename) + '_' + bindingName,
});

const DEV_MODE = process.env.MODE_ENV === 'development';

module.exports = {
  context: appPath.root,
  entry: {
    client: appPath.clientAppTsx,
  },
  output: {
    path: appPath.clientDist,
    clean: true,
    publicPath: '/',
    filename: DEV_MODE ? '[name].js' : '[name].[chunkhash].js',
    chunkFilename: DEV_MODE ? '[name].chunk.js' : '[name].[chunkhash].chunk.js',
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js', '.css'],
  },
  target: 'web',
  performance: {
    hints: DEV_MODE ? false : 'warning',
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
  devtool: DEV_MODE ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer],
              }),
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
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
    new HtmlWebpackPlugin({
      template: appPath.htmlTemplate,
      chunks: ['vendor', 'client'],
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: DEV_MODE ? '[name].css' : '[name].[chunkhash].css',
    }),
    new ESLintPlugin({
      files: resolveRelativeAppRoot('src/**/*.{ts,tsx}'),
    }),
    new StylelintPlugin({
      extensions: ['.ts', '.tsx', '.css'],
      fix: true,
    }),
    new DefinePlugin({
      'process.env': {},
    }),
  ].filter(Boolean),
};
