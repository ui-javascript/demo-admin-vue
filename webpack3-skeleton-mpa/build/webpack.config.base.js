/**
 * webpack 基础配置
 * @type {[type]}
 */
// 引入配置
const config = require("./config");

const path = require("path");
const webpack = require('webpack');
const glob = require("glob")

// 引入插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
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
  let pathDir = 'src(\/|\\\\)(.*?)(\/|\\\\)views' // 视图所在
  let files = glob.sync(globPath)
  let dirname, entries = []
  for (let i = 0; i < files.length; i++) {
    dirname = path.dirname(files[i])
    entries.push({
      tmpl: files[i],
      dir: dirname.replace(new RegExp('^' + pathDir), '$2')
    })
  }
  return entries;
}

// 生成多页面的集合
let viewsDirectory = ''
console.log(process.env.NODE_ENV == 'prod')
if (process.env.NODE_ENV == 'prod') {
  viewsDirectory = 'templates/'
  console.log(viewsDirectory)
} 

getEntryDir()
  .forEach((page) => {
    console.log(page + '/n')

    let moduleName = page.dir.split('/')
    let pathArr = page.tmpl.split('/')
    let fileName = pathArr[pathArr.length - 1].split('.')[0]
    let moduleNameStr = moduleName[moduleName.length - 1]

    const htmlPlugin = new HTMLWebpackPlugin({
      filename: viewsDirectory + `${moduleNameStr}/${fileName}.html`,
      // filename: `${moduleNameStr}.html`,
      template: path.resolve(__dirname, `../${page.tmpl}`),

      // @FIXME 需要考虑具体引入模块
      chunks: ['commons', moduleNameStr, 'vendors', 'manifest'],
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

let vendorsDir = getVendors()
if (vendorsDir.length > 0) {
  Entries['vendors'] = vendorsDir
} // 第三方类库


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
        loader: 'html-withimg-loader'
      }],
  },
  devtool: 'eval',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendor.bundle.js'
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

    // 提供jquery会被打包进去
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery"
    // })
  ],

  // 全局引用jquery
  externals: {
    jquery: 'window.$',
    $: 'window.$'
  },

  resolve: {
    extensions: ['.js', '.css', '.styl', '.less'],
    alias: {
      "@": path.join(__dirname, "../"),
      "src": path.join(__dirname, "../src"),
      "libs": path.join(__dirname, "../src/static/libs"),
      "components": path.join(__dirname, "../src/components"),
      "static": path.join(__dirname, "../src/static"),
      "pages": path.join(__dirname, "../src/pages"),
    }
  }
}
module.exports = webpackconfig
