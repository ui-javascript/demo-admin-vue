/**
 * 开发环境配置文件
 */

const config = require('./config')
const merge = require('webpack-merge')
const utils = require("./utils")
const fs = require('fs')
const path = require("path")
const webpack = require('webpack')
// const glob = require("glob")
const HTMLWebpackPlugin = require("html-webpack-plugin")
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

const baseWebpackConfig = require('./webpack.base.config')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
const createRootTemplate = require('./utils/create-root-template')

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://jsonplaceholder.typicode.com',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   },
  //   // 项目根目录
  //   contentBase: config.devServerOutputPath,
  //   // 错误、警告展示设置
  //   overlay: {
  //     errors: true,
  //     warnings: true
  //   }
  // },

  module: {
    loaders: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
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

// 通过 html-webpack-plugin 生成的 HTML 集合
var HTMLPlugins = [];

// 入口文件集合
var Entries = {}


// 生成多页面的集合
var viewsDirectory = ''
// if (process.env.NODE_ENV == 'production') {
//   viewsDirectory = config.build.assetsHtmlPath
//   // console.log(viewsDirectory)
// }

const pages = utils.getEntryDir()
pages.forEach((page) => {
  // console.log(JSON.stringify(page) + '/n')

  let moduleName = page.dir.split('/')
  let pathArr = page.tmpl.split('/')

  let fileName = pathArr[pathArr.length - 1].split('.')[0]
  let moduleNameStr = moduleName[moduleName.length - 1]

  const htmlPlugin = new HTMLWebpackPlugin({
    filename: viewsDirectory + `${moduleNameStr}/${fileName}.html`,
    // filename: `${page.dir}${moduleNameStr}.html`,
    template: path.resolve(__dirname, `../${page.tmpl}`),
    inlineSource: '.(js|css)$', // embed all javascript and css inline

    // @FIXME 需要考虑具体引入模块
    // chunks: ['commons', moduleNameStr, 'vendors', 'manifest'],
    chunks: ['commons', page.tmpl],
  });

  // console.log('htmlPlugin -> ' + JSON.stringify(htmlPlugin))

  HTMLPlugins.push(htmlPlugin);

  // if (!hasPushInline) {
  //   HTMLPlugins.push(new HtmlWebpackInlineSourcePlugin());
  //   hasPushInline = true;
  // }

  // let pathJSFile = path.resolve(__dirname, `../src/${page.dir}/${fileName}.js`);
  //
  // // 注意 判断文件是否存在需要时间 要同步
  // if (!fs.existsSync(pathJSFile)) {
  //   pathJSFile = path.resolve(__dirname, '../static/templates.js')
  // }
  // Entries[page.tmpl] = pathJSFile;
})


// 第三方类库
let vendorsDir = utils.getVendors()
if (vendorsDir.length > 0) {
  Entries['vendors'] = vendorsDir
}
// console.log('入口 -> ' + JSON.stringify(Entries))
console.log('HTML -> ' + JSON.stringify(...HTMLPlugins))

module.exports.plugins.push(...HTMLPlugins)
