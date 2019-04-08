const webpack = require('webpack');

module.exports = {
  externals: ['express'],
  optimization: { minimize: false },
  plugins: [new webpack.DefinePlugin({ 'global.GENTLY_HIJACK': false })],
};
