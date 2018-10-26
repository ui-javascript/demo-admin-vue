/* eslint-disable */
const webpack = require('webpack');
const path = require('path')
const merge = require('webpack-merge')

// 常用插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); //webpack 启动后自动打开浏览器

// 配置文件
const baseWebpackConfig = require('./webpack.config.base')
const pageConfig = require('./utils.mpa');
const myConfig = require("../config/index")
const PORT = myConfig.PORT

// 处理路径
function resolve(dir) {
    return path.join(__dirname, '..' , dir)
}

let webpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    plugins: [
        new webpack.ProvidePlugin({}),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].[hash:7].css',
            allChunks: true
        }),
        //自动打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:' + PORT
        }),
    ],
    // 起本地服务
    devServer: {
        // 服务器返回浏览器的时候是否启动gzip压缩
        compress: true,
        contentBase: [
            resolve("dist"),
            resolve("static")
        ],
        historyApiFallback: true,
        inline: true,
        hot: true,
        overlay: true,
        host: '127.0.0.1',
        port: PORT
    }
});

// 多页面生成
if (pageConfig && Array.isArray(pageConfig)) {
    pageConfig.map(page => {
        webpackConfig.entry[page.name] = `./${page.js}`;
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            filename: resolve(`/dist/${page.name}`),
            template: resolve(page.template),
            inject: true,
            chunks: ['vendor', 'manifest', page.name],
            inlineSource: '.(js|css)$',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            },
            chunksSortMode: 'dependency'
        }))
    })
}

module.exports = webpackConfig;