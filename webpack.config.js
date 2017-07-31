const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build')
};
module.exports = {
  entry: {
    'index': PATHS.source + '/pug/index.js'
  },
  output: {
      path: PATHS.build,
      filename: '[name].js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: PATHS.source + '/pug/index.pug'
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  }
};