const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common')

module.exports = merge(common,{
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  }
})
