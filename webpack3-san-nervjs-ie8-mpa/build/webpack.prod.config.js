/**
 * build配置
 * @type {[type]}
 */
const path = require("path");

// 引入基础配置
const webpackBase = require("./webpack.base.config");
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const utils = require("./utils")
const HTMLWebpackPlugin = require("html-webpack-plugin")
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

// 引入 webpack
const webpack = require("webpack");
var config = require('./config')

// 合并配置文件
module.exports = webpackMerge(webpackBase, {
  plugins: [
    new CleanWebpackPlugin(['dist/*'], {
      // 设置root 相对于config而言
      root: path.resolve(__dirname, '../'),
      verbose: true
    }),

    // 代码压缩
    new webpack.optimize.UglifyJsPlugin({
      // 开启 sourceMap
      sourceMap: true
    }),

    // 提取公共 JavaScript 代码
    new webpack.optimize.CommonsChunkPlugin({
      // chunk 名为 commons
      name: "commons",
      filename: "[name].bundle.js",
    }),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])

  ]
});


var HTMLPlugins = [];
var Entries = {}
var viewsDirectory = config.build.assetsHtmlPath

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


  HTMLPlugins.push(htmlPlugin);
})


// 第三方类库
let vendorsDir = utils.getVendors()
if (vendorsDir.length > 0) {
  Entries['vendors'] = vendorsDir
}
// console.log('入口 -> ' + JSON.stringify(Entries))
console.log('HTML -> ' + JSON.stringify(...HTMLPlugins))

module.exports.plugins.push(...HTMLPlugins)

