const path = require('path');
const webpack = require('webpack');
const ExtracktTextPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: [
      './src/ts/app.ts',
      './src/scss/app.scss'
    ],
    chat: [
      './src/ts/chat.ts',
      './src/scss/chat.scss'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      app: path.resolve(__dirname, './src/ts/app'),
      chat: path.resolve(__dirname, './src/ts/chat'),
      components: path.resolve(__dirname, './src/ts/components'),
    }
  },
  stats: {
    builtAt: false,
    children: false,
    colors: true,
    entrypoints: false,
    hash: false,
    modules: false,
    moduleTrace: false,
    version: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          ExtracktTextPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        config : {
          path: 'postcss.config.js'
        }
      }
    }),
    new ExtracktTextPlugin({
      filename: '../css/[name].css'
    })
  ]
}
