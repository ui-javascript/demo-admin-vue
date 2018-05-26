/**
 * webpack 基础配置
 * @type {[type]}
 */
// 引入配置
const config = require("../config");

const path = require("path");
const webpack = require('webpack');
const glob = require("glob")

// 引入插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
// 清理 dist 文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin")
// 抽取 css
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 通过 html-webpack-plugin 生成的 HTML 集合
let HTMLPlugins = [];

// 入口文件集合
let Entries = {}

function getEntryDir() {
    // let globPath = 'src/pages/**/*.' +
    let globPath = `src/pages/**/*.@(${config.tplLang})`

    // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
    let pathDir = 'src(\/|\\\\)(.*?)(\/|\\\\)_tmpl' // 视图所在
    console.log(pathDir)
    let files = glob.sync(globPath)
    let dirname, entries = []
    for (let i = 0; i < files.length; i++) {

        dirname = path.dirname(files[i])

        entries.push({
            tmpl: files[i],
            dir: dirname.replace(new RegExp('^' + pathDir), '$2'),
            // dir: dirname.replace(/src\//, ''),

        })
    }
    return entries;
}

// 生成多页面的集合
let viewsDirectory = ''
// console.log(process.env.NODE_ENV == 'prod')
if (process.env.NODE_ENV == 'prod') {
    viewsDirectory = 'pages/'
    console.log(viewsDirectory)
}

getEntryDir()
    .forEach((page) => {
        console.log(JSON.stringify(page) + '/n')

        let moduleName = page.dir.split('/')
        let pathArr = page.tmpl.split('/')
        let fileName = pathArr[pathArr.length - 1].split('.')[0]
        let moduleNameStr = moduleName[moduleName.length - 1]

        const htmlPlugin = new HTMLWebpackPlugin({
            filename: viewsDirectory + `${moduleNameStr}/${fileName}.html`,
            // filename: `${moduleNameStr}.html`,
            template: path.resolve(__dirname, `../${page.tmpl}`),
            inlineSource: '.(js|css)$', // embed all javascript and css inline

            // @FIXME 需要考虑具体引入模块
            // chunks: ['commons', moduleNameStr, 'vendors', 'manifest'],
            chunks: ['commons', moduleNameStr],
        });
        HTMLPlugins.push(htmlPlugin);
        Entries[moduleNameStr] = path.resolve(__dirname, `../src/${page.dir}/index.js`);
    })

function getVendors() {
    let globPath = `src/${config.libraryDir}/**/*.*`
    let files = glob.sync(globPath)
    let libsArr = []
    files.forEach((v, i) => {
        libsArr.push('./' + v)
    })
    return libsArr
}

// 第三方类库
let vendorsDir = getVendors()
if (vendorsDir.length > 0) {
    Entries['vendors'] = vendorsDir
}

let webpackconfig = {
    entry: Entries,
    devtool: "cheap-module-source-map",
    output: {
        filename: "static/js/[name].bundle.[hash].js",
        path: path.resolve(__dirname, config.devServerOutputPath),

        // 公共路径调整
        // publicPath: (process.env.NODE_ENV === 'dev') ? path.resolve(__dirname, '/static') : '/'
    },
    // 加载器
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    publicPath: config.cssPublicPath,
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true, // 开启 css 压缩
                        }
                    }, {
                        loader: "postcss-loader"
                    }]
                })
            },
            {
                test: /\.styl(us)?$/,
                use: ['style-loader', 'css-loader', 'stylus-loader', {
                    loader: "postcss-loader",
                    options: {
                        plugins: function () {
                            return [require('autoprefixer')];
                        }
                    }
                }]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader', {
                    loader: 'postcss-loader',
                    options: {
                        importLoaders: 1,
                        plugins: function () {
                            return [require('autoprefixer')];
                        }
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', {
                    loader: 'postcss-loader',
                    options: {
                        importLoaders: 1,
                        plugins: function () {
                            return [require('autoprefixer')];
                        }
                    }
                }]
            },
            {
                test: /\.(jade|pug)$/,
                loader: ['html-loader', 'pug-html-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // {
            //     test: /\.jsx?$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader'
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        // 打包生成图片的名字
                        name: "[name].[ext]",
                        // 图片的生成路径
                        outputPath: config.imgOutputPath
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(htm|html)$/i,
                use: [
                    {
                        loader: 'html-withimg-loader'
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }]
            }],
    },
    // devtool: 'eval',
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.bundle.js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        // 自动清理 dist 文件夹
        new CleanWebpackPlugin([config.devServerOutputPath]),

        // 将 css 抽取到某个文件夹
        new ExtractTextPlugin({
            //生成css文件名
            filename: 'static/css/[name].[contenthash].css',
            disable: false,
            allChunks: true
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        // 自动生成 HTML 插件
        ...HTMLPlugins,

        // @TODO 内联脚本等的处理
        // new HtmlWebpackInlineSourcePlugin(),

        // 提供jquery会被打包进去
        new webpack.ProvidePlugin({
            san: "san",

            // @TODO nervjs 与 anujs的支持
            // @TODO 打包优化
            // nerv: "nervjs",
            // anu: "anujs"
        })
    ],

    // 全局引用jquery
    externals: {
        jquery: 'window.$',
        $: 'window.$',

        // seajs: 'window.seajs'
    },

    resolve: {
        extensions: ['.js', '.css', '.styl', '.less'],
        alias: {
            // 'react': 'nervjs',
            // 'react-dom': 'nervjs',
            // 'create-react-class': "nerv-create-class",
            "@": path.join(__dirname, "../static"),
            "@static": path.join(__dirname, "../static"),
            // "static": path.join(__dirname, "../static"),
            "@src": path.join(__dirname, "../src"),
            "@assets": path.join(__dirname, "../src/assets"),
            "@components": path.join(__dirname, "../src/components"),
            "@views": path.join(__dirname, "../src/views"),
            "@pages": path.join(__dirname, "../src/pages"),
            "@libs": path.join(__dirname, "../src/assets/libs"),
            "@theme": path.join(__dirname, "../src/assets/less/theme"),
        }
    }
}
module.exports = webpackconfig
