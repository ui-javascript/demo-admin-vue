/* eslint-disable */
const webpack = require('webpack');
const path = require('path')

//  常用组件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin-v2');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //webpack可视化

// 引入配置
const pageConfig = require('./utils.mpa');
const myConfig = require("../config/index")
const CDN = myConfig.CDN
const tolerateIE8 = myConfig.IE8 === true

// 处理路径
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}


class ChunksFromEntryPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('ChunksFromEntryPlugin', compilation => {
            compilation.hooks.htmlWebpackPluginAlterChunks.tap(
                'ChunksFromEntryPlugin',
                (_, {
                    plugin
                }) => {
                    // takes entry name passed via HTMLWebpackPlugin's options
                    const entry = plugin.options.entry;
                    const entrypoint = compilation.entrypoints.get(entry);
                    return entrypoint.chunks.map(chunk =>
                        ({
                            names: chunk.name ? [chunk.name] : [],
                            files: chunk.files.slice(),
                            size: chunk.modulesSize(),
                            hash: chunk.hash
                        })
                    );
                }
            );
        });
    }
}

let webpackConfig = {
    mode: 'production',
    // 配置入口
    entry: {},
    devtool: false,
    // 配置出口
    output: {
        path: resolve("dist"),
        filename: 'js/[name].[hash:7].js',
        publicPath: CDN
    },
    resolve: {
        extensions: [".js", ".css", ".json", ".vue", ".san"],
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
                loader: ['babel-loader'],
                include: [
                    resolve('src'),
                    resolve('test'),
                    resolve(`${myConfig.PAGES}`)
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: ['css-loader?minimize&sourceMap=false']
                        }),
                        less: ExtractTextPlugin.extract({
                            use: ['css-loader?minimize&sourceMap=false', "less-loader"]
                        })
                    }
                }
            },
            // .san文件
            {
                test: /\.san$/,
                loader: 'san-loader'
            },
            // html中的img标签
            {
                test: /\.html$/,
                loader: 'html-withimg-loader',
                include: [resolve("src")],
                options: {
                    limit: 10000,
                    // min:false,
                    min: true,
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
                    use: ['css-loader?minimize&sourceMap=false', "postcss-loader"],
                }),
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize&sourceMap=false', "postcss-loader", 'less-loader'],
                }),
                // exclude: /node_modules/,
                // include: [resolve(myConfig.PAGES), resolve('src')],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({}),
        new ExtractTextPlugin({
            filename: 'css/[name].[hash:7].css'
        }),
        // 设置每一次build之前先删除dist
        new CleanWebpackPlugin(
            ['dist'], 　 //匹配删除的文件
            {

                //根目录
                root: resolve('/'),
                //开启在控制台输出信息
                verbose: true,
                //启用删除文件
                dry: false
            }
        ),
        new ChunksFromEntryPlugin(),
        // 默认添加NODE_ENV为production
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new CopyWebpackPlugin([{
            from: resolve('static'),
            to: '',
            ignore: myConfig.COPYDIR_IGNORE.replace(/\s+/g, "").split(',')
        }]),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        minimize: process.env.NODE_ENV === 'production' ? true : false, //是否进行代码压缩
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                // default: {
                //     minChunks: 2,
                //     priority: -20,
                //     reuseExistingChunk: true
                // },
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
};

// 路径覆盖
Object.assign(webpackConfig.resolve.alias, myConfig.RESOLVE_ALIAS)

if (tolerateIE8) {
    console.log('这个少年在作死地兼容IE8+ =================== ')
    // webpackConfig.entry['es5-polyfill'] = 'es5-polyfill'
    webpackConfig.plugins.unshift(new es3ifyPlugin());
    // 旧版本写法
    // webpackConfig.plugins.push(
    //     new UglifyJsPlugin({
    //         mangle: {
    //             screw_ie8: false
    //         },
    //         mangleProperties: {
    //             screw_ie8: false,
    //         },
    //         compress: {
    //             screw_ie8: false,
    //             properties: false,
    //             warnings: false
    //         },
    //         output: {
    //             screw_ie8: false,
    //             beautify: true,
    //             quote_keys: true,
    //         }
    //     })
    // )
}

webpackConfig.plugins.push(
    new UglifyJsPlugin({
        uglifyOptions: {
            ie8: tolerateIE8
        },
        sourceMap: true,
        parallel: true,
    })
)


if (pageConfig && Array.isArray(pageConfig)) {
    pageConfig.map(page => {
        webpackConfig.entry[page.name] = `./${page.js}`;
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            filename: resolve(`dist/${page.name}`),
            template: resolve(page.template),
            inject: true,
            entry: page.name,
            chunks: [page.name],
            inlineSource: '.(js|css)$',
            // minify:false,
            minify: {
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                // removeScriptTypeAttributes: true,
                // removeStyleLinkTypeAttributes: true,
                // useShortDoctype: true,
                // collapseInlineTagWhitespace: true,
                // minifyCSS: true,
                // minifyJS: true,
                // minifyURLs: true
            },
            chunksSortMode: 'dependency'
        }))
    })
}


console.log(process.env.NODE_ENV)
module.exports = webpackConfig;

