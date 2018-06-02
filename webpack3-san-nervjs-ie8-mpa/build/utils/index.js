// node 原生path模块
var path = require('path')
// glob模块，用于读取webpack入口目录文件
var glob = require('glob');
var config = require('../config')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')


exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  // generate loader string to be used with extract text plugin
  function generateLoaders(loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')


    // if (options.extract) {
    //   return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
    // } else {
    //   return ['vue-style-loader', sourceLoader].join('!')
    // }
  }

  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus'])
  }
}

exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}

exports.getEntries = function (globPath) {
  var entries = {}
  /**
   * 读取src目录,并进行路径裁剪
   */
  glob.sync(globPath).forEach(function (entry) {
    /**
     * path.basename 提取出用 ‘/' 隔开的path的最后一部分，除第一个参数外其余是需要过滤的字符串
     * path.extname 获取文件后缀
     */
      // var basename = path.basename(entry, path.extname(entry), 'router.js') // 过滤router.js
      // ***************begin***************
      // 当然， 你也可以加上模块名称, 即输出如下： { module/main: './src/module/index/main.js', module/test: './src/module/test/test.js' }
      // 最终编译输出的文件也在module目录下， 访问路径需要时 localhost:8080/module/index.html
      // slice 从已有的数组中返回选定的元素, -3 倒序选择，即选择最后三个
    var tmp = entry.split('/').splice(-3)
    var moduleName = tmp.slice(1, 2);
    // ***************end***************
    entries[moduleName] = entry
  });
  // console.log(entries);
  // 获取的主入口如下： { main: './src/module/index/main.js', test: './src/module/test/test.js' }
  return entries;
}

exports.getEntryDir = function () {
  // let globPath = 'src/pages/**/*.' +
  let globPath = `src/pages/**/*.@(${config.common.tplLang})`

  // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
  // let pathDir = 'src(\/|\\\\)(.*?)(\/|\\\\)_tmpl' // 视图所在
  // console.log(pathDir)

  let files = glob.sync(globPath)
  let dirname, entries = [], dir, module
  let filenameArr, filenameTitle, filenameExt
  
  for (let i = 0; i < files.length; i++) {
    
    // 获取目录名
    dirname = path.dirname(files[i])

    // 不支持二级目录
    module = dirname.split('/');
    if (module[0] === 'src') {
      module.shift();
    }
    dir = module.join("/");
    if (module[0] == 'pages') {
      module.shift()
    }
    module = module.join("/")
    
    // 原文件信息
    filenameArr = files[i].split('/')
    filenameArr = filenameArr[filenameArr.length - 1].split('.')
    filenameTitle = filenameArr[0]
    filenameExt = filenameArr[1]
    
    entries.push({
      template: files[i],
      
      // eg. 'index' + 'pug'
      filenameTitle: filenameTitle,
      filenameExt: filenameExt,
      
      // eg. src/pages/index
      dirname: dirname,

      // 形如 pages/index
      // dir: dirname.replace(new RegExp('^' + pathDir), '$2'),
      dir: dir,
      
      // 形如index
      module: module 
    })

  }

  // console.log('entries -> ' + JSON.stringify(entries))

  return entries
}

// 获取vendors
exports.getVendors = function () {
  let globPath = `src/${config.common.libraryDir}/**/*.*`
  let files = glob.sync(globPath)
  let libsArr = []
  files.forEach((v, i) => {
    libsArr.push('./' + v)
  })
  return libsArr
}

