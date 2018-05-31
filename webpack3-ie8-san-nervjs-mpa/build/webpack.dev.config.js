/**
 * 开发环境配置文件
 * @type {[type]}
 */
// const opn = require('opn')
//
// // 引入基础配置文件
// const webpackBase = require("./webpack.base.config");
// // 引入 webpack-merge 插件
// const webpackMerge = require("webpack-merge");
// // 引入配置文件
// const config = require("../config");
// // 合并配置文件
// module.exports = webpackMerge(webpackBase, {
//   // 配置 webpack-dev-server
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://jsonplaceholder.typicode.com',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     },
//     // 项目根目录
//     contentBase: config.devServerOutputPath,
//     // 错误、警告展示设置
//     overlay: {
//       errors: true,
//       warnings: true
//     }
//   }
// });

var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})


// var pages = utils.getEntries('./src/module/**/*.html')
// var pages = utils.getEntries(`src/pages/**/*.@(${config.common.tplLang})`)
// for(var page in pages) {
//   // 配置生成的html文件，定义路径等
//   var conf = {
//     filename: page + '.html',
//     template: pages[page], //模板路径
//     inject: true,
//     // excludeChunks 允许跳过某些chunks, 而chunks告诉插件要引用entry里面的哪几个入口
//     // 如何更好的理解这块呢？举个例子：比如本demo中包含两个模块（index和about），最好的当然是各个模块引入自己所需的js，
//     // 而不是每个页面都引入所有的js，你可以把下面这个excludeChunks去掉，然后npm run build，然后看编译出来的index.html和about.html就知道了
//     // filter：将数据过滤，然后返回符合要求的数据，Object.keys是获取JSON对象中的每个key
//     excludeChunks: Object.keys(pages).filter(item => {
//       return (item != page)
//     })
//   }
//   // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
//   module.exports.plugins.push(new HtmlWebpackPlugin(conf))
// }
