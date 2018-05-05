var path = require('path')
var webpack = require('webpack')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  // 配置入口文件，有几个写几个
  entry: {
    index: './src/js/page/index.js',
    list: './src/js/page/list.js',
    about: './src/js/page/about.js'
  },

  // 出口
  output: {
    path: path.join(__dirname, 'dist'), // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    publicPath: '/',       // 模板、样式、脚本、图片等资源对应的server上的路径
    filename: 'js/[name].js',     // 每个页面对应的主js的生成配置
    chunkFilename: 'js/[id].chunk.js'   // chunk生成的配置
  },

  module: {

    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css!less')
      }, {
        test: /\.html$/,
        loader: 'html?attrs=img:src img:data-src'
      }, {
        // 文件加载器，处理文件静态资源
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }, {
        // 将小于8192byte的图片转成base64码
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
      }
    ]
  },

  plugins: [
    // 加载jq
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),

    // 提取哪些模块共有的部分
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      chunks: ['index', 'list', 'about'],
      minChunks: 3
    }),

    // 单独使用link标签加载css并设置路径，相对于output配置中的publickPath
    new ExtractTextPlugin('css/[name].css'),

    // HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      favicon: './src/img/favicon.ico',
      filename: './index.html',
      template: './src/view/index.html', // html模板路径
      inject: 'body',
      hash: true,
      chunks: ['vendors', 'index'],
      // 压缩HTML文件
      minify: {
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: false // 删除空白符与换行符
      }
    }),

    // 根据模板插入css/js等生成最终HTML
    new HtmlWebpackPlugin({
      favicon: './src/img/favicon.ico',
      filename: './list.html',
      template: './src/view/list.html',
      inject: true, // js插入的位置，true/'head'/'body'/false
      hash: true,
      chunks: ['vendors', 'list'],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),


    new HtmlWebpackPlugin({ // 根据模板插入css/js等生成最终HTML
      favicon: './src/img/favicon.ico', // favicon路径，通过webpack引入同时可以生成hash值
      filename: './about.html', // 生成的html存放路径，相对于path
      template: './src/view/about.html', // html模板路径
      inject: true, // js插入的位置，true/'head'/'body'/false
      hash: true, // 为静态资源生成hash值
      chunks: ['vendors', 'about'], // 需要引入的chunk，不配置就会引入所有页面的资源
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: false // 删除空白符与换行符
      }
    }),

    new webpack.HotModuleReplacementPlugin() // 热加载
  ],


  // 使用webpack-dev-server，提高开发效率
  devServer: {
    contentBase: './',
    host: 'localhost',
    port: 9090,
    inline: true,
    hot: true
  }
};
