// 主要为了抽离css样式
// 防止将样式打包在js中引起页面样式加载错乱的现象
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const helpers = require('../utils/helpers')
const consts = require('../utils/consts')
const path = require('path')

const config = {
  // 多入口
  entry: helpers.getEntry(),

  // 多出口
  output: {
    path: consts.DIST,
    publicPath: consts.CDN,
    filename: `${consts.SCRIPTS}[name].js`,
  },


  // 模块处理
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        include: [consts.SRC],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: process.env.NODE_ENV === 'production'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [`${consts.SRC}/styles`]
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('postcss-font-magician')(),
                  require('cssnano')()
                ]
              }
            }
          ],
          publicPath: '../'
        })
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
              minimize: false
            }
          }
        ]
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'ejs-compiled-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: consts.CDN + consts.IMAGES,
              outputPath: consts.IMAGES,
              name: '[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },


  // 插件
  plugins: [
    new ExtractTextPlugin(`${consts.STYLES}[name].css`),

    // 多个new HtmlWebpackPlugin()
    ...helpers.getPlugins()
  ],

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.html', 'ejs', '.scss'],
    alias: {
      '@': path.resolve('src'),
      '~': path.resolve('assets')
    }
  }
}

module.exports = config
