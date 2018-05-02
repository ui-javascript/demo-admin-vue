var config = require('./webpack.base.config.js');
config.devServer = {
  host: '0.0.0.0',
  port: 8082,
  publicPath: '/',
  stats: {
    colors: true,
    reasons: true,
    warnings: true,
  },
  proxy: require('./locals').proxy,
  inline: true, // 指定Automatic Refresh(Inline mode)
  disableHostCheck: true
};
config.devtool = 'cheap-module-source-map';
config.debug = true;

module.exports = config;