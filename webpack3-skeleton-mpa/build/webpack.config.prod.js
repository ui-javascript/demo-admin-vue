/**
 * build配置
 * @type {[type]}
 */
const path = require("path");

// 引入基础配置
const webpackBase = require("./webpack.config.base");
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
  ]
});
