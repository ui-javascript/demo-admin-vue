/**
 * 根据开发/生产环境
 * 开启服务器
 */
const consts = require('./config/consts')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require(`./config/${process.env.NODE_ENV}`)
const compiler = webpack(webpackConfig)
var opn = require('opn')

// 开启服务器
if (process.env.NODE_ENV === 'production') {

  compiler.run((err, stats) => {
    console.log(stats.toString({
      chunks: true,
      colors: true
    }))
  })

} else {

  const server = new WebpackDevServer(compiler, {
    stats: {
      colors: true
    }
  })

  server.listen(consts.DEV_PORT, '127.0.0.1', () => {
    console.log('在http://localhost:' + consts.DEV_PORT + '开跑啦~~~~~')
    opn(`http://127.0.0.1:${consts.DEV_PORT}/webpack-dev-server/login.html`)
  })

}


