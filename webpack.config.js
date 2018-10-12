const path = require('path');

module.exports = {
  entry: {
    app: './src/ts/app.ts',
    chat: './src/ts/chat.ts'
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      app: path.resolve(__dirname, './src/ts/app'),
      chat: path.resolve(__dirname, './src/ts/chat'),
      components: path.resolve(__dirname, './src/ts/components'),
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  }
}
