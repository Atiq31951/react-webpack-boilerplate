const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  optimization: {
    // minimizer: [new OptimizeCSSAssetsPlugin({})],
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
});
