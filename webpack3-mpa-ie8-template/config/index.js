/**
 * 配置文件
 */
const path = require('path')


module.exports = {
  moduleName: 'pages',

  cssPublicPath: "../static",
  imgOutputPath: "img/", // 图片
  cssOutputPath: "./static/css/styles.css", // bulid 后的css路径
  devServerOutputPath: "../dist", // build后的目录


  distRoot: path.resolve(__dirname, '/dist'),
  tplLang: 'pug|html', // 模板语法，暂时只支持html、pug
  libraryDir: 'assets/libs',



  //  需要正确配置如下:
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),

    // 输出资源的存放位置
    assetsSubDirectory: 'static',

    // 公共资源位置
    assetsPublicPath: 'static',

    // 视图文件输出位置
    assetsHtmlPath: '',

    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },

  dev: {
    env: require('./dev.env'),
    port: 8091,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}