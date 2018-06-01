var path = require('path')
var glob = require('glob');

// 导入配置
var config = require('../config')

// 提取
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// 静态资源路径
exports.assetsPath = function (_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory

    return path.posix.join(assetsSubDirectory, _path)
}


//
exports.cssLoaders = function (options) {
    options = options || {}

    var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: options.sourceMap
        }
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        var loaders = [cssLoader]
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }

    // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),

        // 语法缩进
        sass: generateLoaders('sass', {indentedSyntax: true}),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
    var output = []
    var loaders = exports.cssLoaders(options)
    for (var extension in loaders) {
        var loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }
    return output
}


// 获取多级的入口文件
exports.getMultiEntry = function (globPath) {
    var entries = {},
        basename, tmpPathArr, pathname, pathsrc;

    glob.sync(globPath).forEach(function (entry) {
        basename = path.basename(entry, path.extname(entry));

        tmpPathArr = entry.split('/').splice(-4);

        pathsrc = tmpPathArr[0] + '/' + tmpPathArr[1];

        console.log(tmpPathArr[0], tmpPathArr[1])

        // 多层目录与单层目录的处理 /list
        if (tmpPathArr[0] == 'src') {
            pathsrc = tmpPathArr[1];
        }

        // console.log(pathsrc)
        pathname = pathsrc + '/' + basename; // 正确输出js和html的路径
        entries[pathname] = entry;

        // console.log(pathname+'-----------'+entry);

    });

    return entries;
}


var fs = require('fs'),
    copyStat = fs.stat;

/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
var filecopy = function (src, dst) {
    // 读取目录中的所有文件/目录
    fs.readdir(src, function (err, paths) {
        if (err) {
            throw err;
        }
        paths.forEach(function (path) {
            var _src = src + '/' + path,
                _dst = dst + '/' + path,
                readable, writable;
            copyStat(_src, function (err, st) {
                if (err) {
                    throw err;
                }
                // 判断是否为文件
                if (st.isFile()) {
                    // 创建读取流
                    readable = fs.createReadStream(_src);
                    // 创建写入流
                    writable = fs.createWriteStream(_dst);
                    // 通过管道来传输流
                    readable.pipe(writable);
                }

                // 如果是目录则递归调用自身
                else if (st.isDirectory()) {
                    exports.startCopy(_src, _dst);
                }
            });
        });
    });
};

//在复制目录前需要判断该目录是否存在，不存在需要先创建目录
exports.startCopy = function (src, dst) {
    fs.exists(dst, function (exists) {
        // 已存在
        if (exists) {
            filecopy(src, dst);
        }

        // 不存在
        else {
            fs.mkdir(dst, function () {
                filecopy(src, dst);
            });
        }
    });
};


