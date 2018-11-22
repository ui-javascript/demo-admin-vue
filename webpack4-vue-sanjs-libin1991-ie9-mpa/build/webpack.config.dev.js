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
const myConfig = require("../config/index")

const getEntry = require('./utils/utils.mpa');
const PAGES = myConfig.system.pages
const MODULES = myConfig.system.modules.replace(/\s+/g,"")
const pageConfig = getEntry(`./${PAGES}/${MODULES}/*.html`);
console.log('多页面如下 ')
console.log(pageConfig)


// 处理路径
function resolve(dir) {
    return path.join(__dirname, '..' , dir)
}

let webpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': myConfig.dev.env
        }),
        new webpack.ProvidePlugin({}),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'static/css/[name].[hash:7].css',
            allChunks: true
        }),
        //自动打开浏览器
        new OpenBrowserPlugin({
            url: `http://localhost:${myConfig.dev.port}/${pageConfig[0].name}`
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-withimg-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]',
                }
            },
        ]
    },
    // 起本地服务
    devServer: {
        // 服务器返回浏览器的时候是否启动gzip压缩
        compress: true,
        // contentBase: [
        //     resolve("dist"),
        //     resolve("static")
        // ],
        contentBase: false,
        historyApiFallback: true,
        inline: true,
        hot: true,
        overlay: true,
        host: '127.0.0.1',
        port: myConfig.dev.port
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
            minify: false,
            chunksSortMode: 'dependency'
        }))
    })
}

module.exports = webpackConfig;