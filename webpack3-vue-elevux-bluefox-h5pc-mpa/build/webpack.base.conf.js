var path = require('path')

// 导入工具类
var utils = require('./utils/index')

// 导入配置
var webpack = require('webpack')
var config = require('../config')

// 路径处理
var glob = require('glob');
var entries = utils.getMultiEntry('./src/' + config.moduleName + '/*.js'); // 获得入口js文件
var chunks = Object.keys(entries);


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

// 输出路径
console.log('检测到以下页面：')
console.log(chunks)


// Vux的loader
const vuxLoader = require('vux-loader')

// Vue loader配置
var vueLoaderConfig = require('./vue-loader.conf')



var webpackConfig = {

    entry: entries,

    // 打包输出
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',

        publicPath: (process.env.NODE_ENV === 'production')
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },


    resolve: {
        // 支持扩展
        extensions: ['.js', '.vue', '.json'],

        // 别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js',

            // 路径
            '@': resolve('src'),
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'css': resolve('src/assets/css'),

            // 组件
            'components': resolve('src/components'),
            '~': resolve('src/components'),
            // 我将组件分为四类
            '~e': resolve('src/components/effects'),
            '~l': resolve('src/components/layout'),
            '~m': resolve('src/components/melt'),
            '~t': resolve('src/components/toolbox'),

            // 工具类
            'utils': resolve('src/utils'),
            // '^': resolve('src/utils'),
        }
    },


    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        // removeComments: false,
                        // collapseWhitespace: false
                    }
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'),
                    resolve('test')
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [ resolve('src/icons') ],
                options: {
                    symbolId: 'icon-[name]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: [resolve('src/icons')],
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: utils.assetsPath('img/[name].[hash:7].[ext]')
                        }
                    },
                    // https://blog.csdn.net/blueberry_liang/article/details/80306389
                    {
                        loader: 'image-webpack-loader',// 压缩图片
                        options: {
                            bypassOnDebug: true,
                            disable: process.env.NODE_ENV !== 'production'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[ext]')
                }
            },

        ]
    },

    // 不需要打包的库文件，在模版文件中使用script引入
    // 使用cdn
    externals: {
        jquery: 'window.$',
        $: 'window.$',
    },


    plugins: [
        // 提取公共模块
        // new webpack.optimize.CommonsChunkPlugin({
        //     // 公共模块的名称
        //     name: 'vendor',
        //     // chunks是需要提取的模块
        //     chunks: chunks,
        //     // 公共模块被使用的最小次数。比如配置为3，也就是同一个模块只有被3个以外的页面同时引用时才会被提取出来作为common chunks。
        //     minChunks: 2 || chunks.length
        // }),
    ]
}


module.exports = vuxLoader.merge(webpackConfig, {
    options: {},
    plugins: ['vux-ui', 'progress-bar', 'duplicate-style']
})
