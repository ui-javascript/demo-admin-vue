var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var glob = require('glob');
var htmlWebpackPlugin = require('html-webpack-plugin');
var es3ifyPlugin = require('es3ify-webpack-plugin');

var extractCss = new ExtractTextPlugin('assets/css/[name].css');

// 自定义插件
var selfPlugins = require('./webpack.plugins.js');

var config = {
  entry: {
    vendors: [
      'jquery',
      path.join(__dirname, '/common/base.js'),
      path.join(__dirname, '/common/base.scss'),
      //path.join(__dirname, '/vendors/jquery.cookie.js'),
      //path.join(__dirname, '/vendors/pinyin.js')
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/chunk_[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
        test: require.resolve('jquery'),
        loader: 'expose?$!expose?jQuery'
      },
      {
        test: path.join(__dirname, '/common/base.js'),
        loader: 'expose?base'
      },
      {
        test: path.join(__dirname, '/vendors/pinyin.js'),
        loader: 'expose?Pinyin'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.s?css$/,
        loader: extractCss.extract('style', 'css?{"discardComments":{"removeAll":true}}!sass')
      },
      {
        test: /\.html$/,
        exclude: /page\.html$/,
        loader: 'html?minimize=true&removeComments=false'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }, 
      {
        test: /\.woff2?(\?[\s\S]+)?$/,
        loader: 'url?limit=10000&name=assets/fonts/[name].[ext]'
      }, {
        test: /\.(svg|ttf|eot)(\?[\s\S]+)?$/,
        loader: 'file?limit=10000&name=assets/fonts/[name].[ext]'
      }, {
        test: /\.(png|gif|jpg|jpeg)$/,
        loader: 'url?limit=10000&name=assets/images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'base': path.join(__dirname, '/common/base.js'),
      //'Pinyin': path.join(__dirname + '/vendors/pinyin.js')
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    extractCss,
    new CopyWebpackPlugin([{
        from: path.join(__dirname, '/vendors/'),
        to: 'assets/vendors/'
      }
    ]),
    new es3ifyPlugin(),
    new selfPlugins()
  ],
  resolve: {
    root: [
      __dirname
    ],
    alias: {
      components: path.join(__dirname, 'components'),
      vendors: path.join(__dirname, 'vendors')
    }
  }
};

var entries = glob.sync(__dirname + '/pages/*').map(function (entry) {
  return {
    name: path.basename(entry),
    path: entry
  }
});
entries.forEach(function (entry) {
  config.entry[entry.name] = entry.path

  //生成html
  config.plugins.push(new htmlWebpackPlugin({
    filename: entry.name + '.html',
    template: entry.path + '/page.html',
    chunks: ['vendors', 'common', entry.name],
    hash: true,
    minify: {
      removeComments: false,
      collapseWhitespace: true
    }
  }));
});
entries = entries.map(function (entry) {
  return entry.name
});

config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
  name: 'common',
  chunks: entries,
  minChunks: entries.length > 3 ? Math.ceil(entries.length * 2.0 / 3) : 3 // common chunks should be refered by more than 2/3 entries
}));
config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
  name: 'vendors',
  minChunks: Infinity
}));

module.exports = config;