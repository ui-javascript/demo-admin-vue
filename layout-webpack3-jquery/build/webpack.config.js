// 引入插件
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// less的全局变量
const globalLessVars = require('../src/common/global_less_vars')

// 路径
const path = require('path')

// 多入口管理文件
const entryJSON = require('../config/entry.json');



// 因为多入口，所以要多个HtmlWebpackPlugin
let plugins = entryJSON.map(page => {
    return new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, `../dist/${page.url}.html`),
        template: path.resolve(__dirname, `../src/page/${page.url}/index.html`),

        chunks: [page.url, 'foo'], // 实现多入口的核心，决定自己加载哪个js文件，这里的 page.url 指的是 entry 对象的 key 所对应的入口打包出来的js文件

        hash: true, // 生成hash值
        minify: false,   // 需要使用html-minifier，不然会报错
        xhtml: true,    // 自闭标签
    })
})

// 入口管理
// 引入jQuery，
// 这个是为了配合 webpack.optimize.CommonsChunkPlugin 这个插件使用
let entry = {}
entryJSON.map(page => {
    entry[page.url] = path.resolve(__dirname, `../src/page/${page.url}/index.js`)
})

module.exports = {
    // 入口文件
    entry: entry,

    // 出口文件
    output: {
        path: __dirname + '/../dist',
        filename: '[name].[chunkhash].js'
    },
    module: {

        rules: [
            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            // CSS
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            root: path.resolve(__dirname, '../src/static'),
                            minimize: true,
                            // sourceMap: true, // 默认关闭
                            alias: {
                                '@': path.resolve(__dirname, '../src/img') // '~@/logo.png' -> src/img/logo.png
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './config'
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            globalVars: globalLessVars
                        }
                    }
                ]
            },

            // HTML + IMG
            {
                test: /\.(png|jpg|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            name: '[hash].[ext]',
                            outputPath: function (fileName) {
                                return 'img/' + fileName    // 后面要拼上这个 fileName 才行
                            }
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-withimg-loader',
                    }
                ]
            }
        ]
    },

    // 如果还有其他插件，将两个数组合到一起就行了
    plugins: ([
        new CleanWebpackPlugin(path.resolve(__dirname, '../dist'), {
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "foo", // 这个对应的是 entry 的 key
            minChunks: 2
        }),
        new UglifyJSPlugin()
    ].concat(plugins))
}