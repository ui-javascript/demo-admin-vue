var path = require('path')

// 导入工具类
var utils = require('./utils/utils')

// 导入配置
var webpack = require('webpack')
var config = require('./config')

// 路径处理
var glob = require('glob');
var entries = utils.getMultiEntry('./src/' + config.moduleName + '/**/**/*.js'); // 获得入口js文件
var chunks = Object.keys(entries);

// 输出路径
console.log(chunks)

// 工程文件根目录调整
var projectRoot = path.resolve(__dirname, '../')

// Vux的loader
const vuxLoader = require('vux-loader')

// Vue loader配置
var vueLoaderConfig = require('./vue-loader.conf')

//
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

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

            // 开发目录
            // '@': resolve('src'),
            '@': path.resolve(__dirname, '../src'),
            'src': path.resolve(__dirname, '../src'),

            // 静态资源
            'assets': path.resolve(__dirname, '../src/assets'),

            // 组件
            'components': path.resolve(__dirname, '../src/components'),
            '~': path.resolve(__dirname, '../src/components')
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
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[ext]')
                }
            },

        ]
    },
    plugins: [
        /*
        // 提取公共模块
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendors', // 公共模块的名称
          chunks: chunks,  // chunks是需要提取的模块
          minChunks: 4 || chunks.length //公共模块被使用的最小次数。比如配置为3，也就是同一个模块只有被3个以外的页面同时引用时才会被提取出来作为common chunks。
        }),
        */
    ]
}


module.exports = vuxLoader.merge(webpackConfig, {
    options: {},
    plugins: ['vux-ui', 'progress-bar', 'duplicate-style']
})
