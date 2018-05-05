const consts = require('./utils/consts')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require(`./configs/${process.env.NODE_ENV}`)
const compiler = webpack(webpackConfig)
var opn = require('opn')

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
    console.log('Starting server on http://localhost:' + consts.DEV_PORT)
    opn(`http://127.0.0.1:${consts.DEV_PORT}/webpack-dev-server/my-view.html`)
  })
}


