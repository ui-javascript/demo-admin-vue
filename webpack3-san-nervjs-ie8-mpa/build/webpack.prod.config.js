/**
 * build配置
 * @type {[type]}
 */
const path = require("path");

// 引入基础配置
const webpackBase = require("./webpack.base.config")
const webpackMerge = require("webpack-merge");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
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
const pages = utils.getEntryDir()
pages.forEach((page) => {
  
  const htmlPlugin = new HTMLWebpackPlugin({
    filename: config.build.assetsHtmlPath + `${page.module}/${page.filenameTitle}.html`,
    template: path.resolve(__dirname, `../${page.template}`),
    inlineSource: '.(js|css)$', // embed all javascript and css inline
    
    // @FIXME 需要考虑具体引入模块
    // chunks: ['commons', moduleNameStr, 'vendors', 'manifest'],
    chunks: ['commons', page.template],
  });
  
  HTMLPlugins.push(htmlPlugin);
})

console.log('HTML -> ' + JSON.stringify(...HTMLPlugins))

module.exports.plugins.push(...HTMLPlugins)

