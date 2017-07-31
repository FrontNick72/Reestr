const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build')
};

const common = merge([
  {
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
    ]
  },
  pug()
]);

module.exports = function(env) {
  if (env === 'production') {
    return common;
  }
  if (env === 'development') {
    return merge([
        common,
        devserver()
    ])
  }
};