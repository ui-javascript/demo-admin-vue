/* eslint-disable */
const webpack = require('webpack');
const path = require('path')
const merge = require('webpack-merge')

//  常用组件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin-v2');
// const es3ifyPlugin = require('es3ify-webpack-plugin');
// webpack可视化
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

// 引入配置
const baseWebpackConfig = require('./webpack.config.base')
const myConfig = require("../config/index")
const tolerateIE8 = myConfig.system.supportIE8 === true

const getEntry = require('./utils/utils.mpa');
const PAGES = myConfig.system.pages
const MODULES = myConfig.system.modules.replace(/\s+/g,"")
const pageConfig = getEntry(`./${PAGES}/${MODULES}/*.html`);
console.log('多页面如下 ')
console.log(pageConfig)


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

let webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: false, // '#source-map'
    plugins: [
        new webpack.DefinePlugin({
            'process.env': myConfig.build.env
        }),
        new webpack.ProvidePlugin({}),
        new ExtractTextPlugin({
            filename: 'static/css/[name].[hash:7].css',
            allChunks: true
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
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
        new CopyWebpackPlugin(myConfig.build.copyDir),
        // 生成统计
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-withimg-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]',
                    minimize: true,
                    removeComments: false,
                    collapseWhitespace: false,
                    minifyJS: true,
                    minifyCSS: true,
                }
            },
        ]
    },
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
});

if (tolerateIE8) {
    console.log('这个少年在作死地兼容IE8+ =================== ')
    // webpackConfig.entry['es5-polyfill'] = 'es5-polyfill'
    webpackConfig.plugins.unshift(new es3ifyPlugin());

    // 旧版本写法
    // uglifyjs-webpack-plugin@1.2.5
    // https://github.com/babel/babel/issues/6606
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

// uglifyjs-webpack-plugin@2.0.1
webpackConfig.plugins.push(
    new UglifyJsPlugin({
        uglifyOptions: {
            ie8: tolerateIE8,
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
            chunks: ['vendor', 'manifest', page.name],
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

// console.log('配置输出~~~')
// console.log(webpackConfig)


module.exports = webpackConfig;

