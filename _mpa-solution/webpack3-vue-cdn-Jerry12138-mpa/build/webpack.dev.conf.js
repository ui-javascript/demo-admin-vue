var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config/index')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var glob = require('glob')
const customConf = require('../config/app.config')
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

const devConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})

const pages = ((globalPath) => {
  const htmlFiles = {}
  let pageName

  glob.sync(globalPath).forEach((pagePath) => {
    var basename = path.basename(pagePath, path.extname(pagePath))
    pageName = basename
    htmlFiles[pageName] = {}
    htmlFiles[pageName]['chunk'] = basename
    htmlFiles[pageName]['path'] = pagePath
  })
  return htmlFiles
})(utils.resolve('src') + `/${customConf.currentProject}/**/*.html`)

for (const entryName in pages) {
  const conf = {
    // 生成出来的html文件名
    filename: entryName + '.html',
    cdnLink: customConf.cdnLink,
    // 每个html的模版，这里多个页面使用同一个模版
    template: pages[entryName]['path'],
    // 自动将引用插入html
    inject: true,
    // 每个html引用的js模块，也可以在这里加上vendor等公用模块
    chunks: ['vendor', 'manifest', pages[entryName]['chunk']]
  }
  /* 入口文件对应html文件（配置多个，一个页面对应一个入口，通过chunks对应）*/
  devConfig.plugins.push(new HtmlWebpackPlugin(conf))
}

module.exports = devConfig
