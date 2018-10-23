/* eslint-disable */
const webpack = require('webpack');
const path = require('path')

// 常用插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); //webpack 启动后自动打开浏览器

// 配置文件
const pageConfig = require('./mpa.config');
const myConfig = require("./project.config")
const PORT = myConfig.PORT

// 处理路径
function resolve(dir) {
    return path.join(__dirname, dir)
}

let webpackConfig = {
    mode: 'development',
    // 配置入口
    entry: {},
    // 配置出口
    output: {
        path: resolve("./dist/"),
        filename: 'js/[name].[hash:7].js',
        publicPath: '/',
        globalObject: 'this'
    },
    resolve: {
        extensions: [".js", ".json", ".vue", ".san"],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            '@m': resolve('src/cmpt-melt/model'),
            '@e': resolve('src/cmpt-melt/effects'),
            '@l': resolve('src/cmpt-melt/layout'),
            '@t': resolve('src/cmpt-melt/toolbox'),
            // san: 'san/dist/san.dev.js'
        }
    },
    externals: {
        jquery: 'window.$',
        $: 'window.$',
        san: 'window.san',
        seajs: 'window.seajs',
        requirejs: 'window.requirejs',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'),
                    resolve(myConfig.PAGES),
                    resolve('test'),
                    resolve('node_modules/webpack-dev-server/client'),
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: ['vue-style-loader', 'css-loader?minimize&sourceMap=false']
                        }),
                        less: ExtractTextPlugin.extract({
                            use: ['vue-style-loader', 'css-loader?minimize&sourceMap=false', "less-loader"]
                        })
                    }
                }
            },
            {
                test: /\.san$/,
                loader: 'san-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-withimg-loader',
                include: [resolve("./src")],
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?sourceMap=false', "postcss-loader"],
                }),
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?sourceMap=false', "postcss-loader", 'less-loader'],
                }),
                // exclude: /node_modules/,
                // include: [resolve(myConfig.PAGES), resolve('src')],
            },

        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({}),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].[hash:7].css'
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
        contentBase: [resolve("dist"), resolve("static")],
        historyApiFallback: true,
        inline: true,
        hot: true,
        overlay: true,
        host: '127.0.0.1',
        port: PORT
    }
};

// 多页面生成
if (pageConfig && Array.isArray(pageConfig)) {
    pageConfig.map(page => {
        webpackConfig.entry[page.name] = `./${page.js}`;
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            filename: resolve(`/dist/${page.name}`),
            template: resolve(page.template),
            inject: true,
            chunks: [page.name],
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