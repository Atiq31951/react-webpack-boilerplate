const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  module: {},
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: false,
    publicPath: '/',
    host: 'app.mern.local',
    port: 4000,
    historyApiFallback: true,
    compress: true,
  },
});
