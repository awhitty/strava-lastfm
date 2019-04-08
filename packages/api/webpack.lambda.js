const webpack = require('webpack');

module.exports = {
  optimization: { minimize: false },
  plugins: [new webpack.DefinePlugin({ 'global.GENTLY_HIJACK': false })],
};
