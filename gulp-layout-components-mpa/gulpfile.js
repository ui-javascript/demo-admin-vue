/**
 * 主要内容参考 (NICE)https://www.cnblogs.com/zhangyuezhen/p/7896047.html
 *
 * 务必参考一下及作者其他repo
 * https://github.com/minguman/browsersync-gulp-demo
 *
 * eslint不做
 *
 * https://github.com/271626514/gulp-demo
 * https://segmentfault.com/a/1190000010138466
 *
 * 生产与开发环境的配置
 * https://github.com/vincentSea/gulp-cli
 *
 * 辅助功能参考 (NICE)https://github.com/mjzhang1993/gulp-template
 * @TODO PWA支持
 *
 * 2015年结合了webpack的，有一些可以参考一下
 * (@deprecated)https://github.com/fwon/gulp-webpack-demo
 *
 * @FIXME browserSync刷新不及时
 *
 * 前端基于gulp后端基于freemarker的工作流程总结
 * https://juejin.im/post/5ad3222d6fb9a028cd458a7e
 *
 * Gulp&Webpack搭建属于自己的特性化前端脚手架 (仅了解下实现细节)
 * https://juejin.im/post/5a77bfa96fb9a06351724e90
 */

// 严格模式
'use strict';

// 导入模块

// var path = require('path'),
//     fs = require('fs');

var gulp = require('gulp'),

    concat = require('gulp-concat-dir'), // 管合并，可以合并同一目录下的所有文件，好处是可以减少网络请求
    plumber = require('gulp-plumber'),   //错误处理提示插件
    notify = require('gulp-notify'),
    zip = require('gulp-zip'),  // 压缩文件
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    resolvePath = require("gulp-resolve-path"),
    babel = require('gulp-babel'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    md5 = require('gulp-md5-assets'),

    // gulp-run-sequence -> run-sequence
    runSequence = require('run-sequence'), // 控制task中的串行和并行

    uglify = require('gulp-uglify'),

    less = require('gulp-less'),
    sass = require('gulp-sass'),
    bourbon = require("bourbon").includePaths,
    neat = require("bourbon-neat").includePaths,

    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),

    minifyHtml = require('gulp-minify-html'),

    imagemin = require('gulp-imagemin'), // 压缩图片
    pngquant = require('imagemin-pngquant'),
    spritesmith = require('gulp.spritesmith'),
    cache = require('gulp-cache'),
    fileInclude = require('gulp-file-include'),
    clean = require('gulp-clean'), // 用来删除文件

    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,

    stripDebug = require('gulp-strip-debug'),

    // pwa
    workbox = require('workbox-build');

// 路径
var PATH_DEV = "./src";
var PATH_VIEWS = "./src/views";
var PATH_ASSETS = "./static";

var PATHS = {
    html: PATH_VIEWS + "/**/*.html",
    htmlFolder: PATH_VIEWS,
    htmlDevFolder: PATH_VIEWS,
    scss: PATH_DEV + "/scss/**/*.scss",
    scssDevFolder: PATH_DEV + "/scss",
    less: PATH_DEV + "/less/**/*.less",
    lessDevOutput: PATH_DEV + "/less/theme/**/_output.less",
    lessDevThemeFolder: PATH_DEV + "/less/theme",
    lessDevFolder: PATH_DEV + "/less",
    scripts: PATH_DEV + "/scripts/**/*.js",
    scriptsDevFolder: PATH_DEV + "/scripts",

    images: PATH_ASSETS + '/images/**/*.{png,jpg,jpeg,ico,gif,svg}',
    imagesFolder: PATH_ASSETS + "/images",
    sprite: PATH_ASSETS + '/images/sprite/!(sprite.png|*.css)',
    plusFolder: PATH_ASSETS + "/plus",
    fontsFolder: PATH_ASSETS + "/fonts",
    mockFolder: PATH_ASSETS + "/mock"
};


// scss编译
gulp.task('compileSass', function (cb) { // cb是传入的回调函数

    return gulp.src(PATHS.scss)
        .pipe(sass({
            sourcemaps: true,
            includePaths: [bourbon, neat]
        }).on('error', sass.logError))
        // .pipe(concat({ext: '.css'}))
        // .pipe(rename('all.min.css'))
        .pipe(cleanCss({compatibility: 'ie7'}))
        .pipe(autoprefixer({
            // browsers: ['> 1%', 'not ie <= 8']
        }))
        // .pipe(sourcemaps.write())
        // .pipe(gulp.dest(PATHS.scssDevFolder))
        .pipe(gulp.dest('./static/scss'))
    // .pipe(reload({stream: true}))


    cb(err);  // 如果 err 不是 null 和 undefined，流程会被结束掉，'two' 不会被执行
});


// less编译
gulp.task('compileLess', function (cb) {
    return gulp.src(PATHS.lessDevOutput) // 注意，只解析_output.less这样的单文件
        .pipe(plumber({errorHandler: notify.onError('Error:<%=error.message%>')}))
        .pipe(less())
        .pipe(autoprefixer())
        // .pipe(concat({ext: '.css'})) //合并
        .pipe(cleanCss())
        // .pipe(sourcemaps.write())
        // .pipe(gulp.dest(PATHS.lessDevThemeFolder))
        .pipe(gulp.dest('./static/css/theme'))

    cb(err);
});

// 缩编JS
gulp.task('compileJS', function () {
    return gulp.src(PATHS.scripts)
        .pipe(plumber()) // 错误提示
        // .pipe(concat({ext: '.js'})) //合并同一目录下的所有文件
        .pipe(babel())
        .pipe(gulp.dest('./static/scripts'))
});

// 编译compileHTML
gulp.task('compileHTML', function () {
    return gulp.src(PATHS.html)
        .pipe(plumber())
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // .pipe(gulp.dest(PATHS.htmlDevFolder))
        .pipe(gulp.dest('./templates'))
});


// 浏览器同步刷新
// http://www.browsersync.cn/docs/gulp/
gulp.task('devSync', function () {
    var distBaseRoot = ".";
    browserSync.init({
        // proxy: "deva.dev",
        port: 8888, //
        // open: "ui",
        ui: {
            port: 3005
        },
        directory: true,
        // browser: ["chrome", "firefox"],
        browser: "chrome",
        server: {
            baseDir: ['./templates'],
            // index: "index.html",
            routes: {
                "/css": distBaseRoot + "/static/css",
                "/scss": distBaseRoot + "/static/scss",
                "/scripts": distBaseRoot + '/static/scripts',

                "/images": distBaseRoot + '/static/images',
                "/plus": distBaseRoot + '/static/plus',
                "/mock": distBaseRoot + '/static/mock',
                "/fonts": distBaseRoot + '/static/fonts'
            }
        },
        // startPath: "index.html"
    });

    // 文件监听
    // fileInclude + browserSync https://www.cnblogs.com/yjzhu/archive/2017/02/27/6474854.html
    gulp.watch(PATHS.html, ['compileHTML']).on('change', reload);

    // ??是否还需要compileHTML 去掉感觉刷新不及时
    // gulp.watch(PATHS.scripts, ['compileHTML', 'compileJS']).on('change', reload);
    // gulp.watch(PATHS.scss, ['compileHTML', 'compileSass']).on('change', reload);
    // gulp.watch(PATHS.less, ['compileHTML', 'compileLess']).on('change', reload);

    gulp.watch(PATHS.scripts, ['compileJS']).on('change', reload);
    gulp.watch(PATHS.scss, ['compileSass']).on('change', reload);
    gulp.watch(PATHS.less, ['compileLess']).on('change', reload);

});





// 默认任务
gulp.task('default', function () {
    runSequence('01-build-dev');
});
gulp.task('01-build-dev', function () {
    runSequence(['cleanDev', 'cleanDist'],
        ['distCopy', 'compileHTML', 'compileLess', 'compileSass', 'compileJS'],
        ['devSync']);
});

// =====================================
// =====================================


// CSS监听
gulp.task('watchCSS', function () {
    gulp.watch(PATHS.less, ['compileLess']);
    gulp.watch(PATHS.scss, ['compileSass']);
});

// 仅作CSS缩编等工作
gulp.task('02-css-job', function () {

    runSequence(['cleanDev', 'cleanDist'],
        ['compileSass', 'compileLess'],
        'watchCSS')
});


// ====================================
// ====================================

// 雪碧图
// 此功能是单一的并不与其他功能串联
gulp.task('makeSprite', function () {
    return gulp.src(PATHS.sprite)
        .pipe(spritesmith({
            imgName: 'ico.png',
            cssName: 'sprite.css'
        }))
        .pipe(gulp.dest(PATHS.imagesFolder));
});


// =====================================
// =====================================

// 清理文件夹
gulp.task('cleanDev', function () {
    return gulp.src(['./static/scripts/*',
            './static/css/*', './static/scss/*',
            // './src/scss/**/*.css',
            './templates/*',
            './sw.js'],
        {read: false})
        .pipe(clean())
});
gulp.task('cleanDist', function () {
    return gulp.src(['./dist/*'],
        {read: false})
        .pipe(clean())
});


// 图片压缩
gulp.task('optimizeImages', function () {
    return gulp.src(PATHS.images)
        .pipe(plumber())
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
            use: [pngquant()] // 使用 pngquant 深度压缩 png 图片
        }))
        .pipe(gulp.dest(PATHS.imagesFolder))
    // .pipe(md5(10, './**/*.{css,js,html,json}'))
    // .pipe(browserSync.reload({stream:true}))
});

// 缩编JS
gulp.task('distJS', function () {
    return gulp.src(PATHS.scripts)
        .pipe(plumber()) // 错误提示
        // .pipe(concat({ext: '.js'})) //合并同一目录下的所有文件
        .pipe(stripDebug())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./static/scripts'))
        .pipe(md5(10, './templates/**/*.html'));

});

// 缩编HTML
gulp.task('distHTML', function () {
    return gulp.src(PATHS.html)
        .pipe(plumber())
        .pipe(minifyHtml())
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./templates'))
    // .pipe(md5(10));
});

// 搬运一些未正确归类的文件
gulp.task('distCopy', function () {
    return gulp.src([PATHS.htmlFolder + '/**/*.*',
        '!' + PATHS.html, '!./**/*.inc'])
        .pipe(gulp.dest('./templates'))
});


// scss编译
gulp.task('distSass', function (cb) { // cb是传入的回调函数

    return gulp.src(PATHS.scss)
        .pipe(sass({
            sourcemaps: true,
            includePaths: [bourbon, neat]
        }).on('error', sass.logError))
        // .pipe(concat({ext: '.css'}))
        // .pipe(rename('all.min.css'))
        .pipe(cleanCss())
        .pipe(autoprefixer({
            // browsers: ['> 1%', 'not ie <= 8']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./static/scss'))
        .pipe(md5(10, './templates/**/*.html'));

    cb(err)
});


// less编译
gulp.task('distLess', function () {
    return gulp.src(PATHS.lessDevOutput) // 注意，只解析_output.less这样的单文件
        .pipe(plumber({errorHandler: notify.onError('Error:<%=error.message%>')}))
        .pipe(less())
        .pipe(autoprefixer())
        // .pipe(concat({ext: '.css'})) //合并
        .pipe(cleanCss())
        .pipe(gulp.dest('./static/css/theme'))
        .pipe(md5(10, './templates/**/*.html'));

});


// 压缩
gulp.task('zip', function () {

    return gulp.src(['./**/*.*',
        '.babelrc',
        // 排除以下文件
        '!{node_modules,cmd,src,config}/**/*.*',
        '!dist.zip',
        // '!{gulpfile.js,package.json,package-lock.json,README.md,.babelrc}'
        ])
        .pipe(plumber())
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('./'))
});

gulp.task('distSync', function () {
    var distBaseRoot = ".";
    browserSync.init({
        // proxy: "deva.dev",
        port: 8080, //
        ui: false,
        directory: true,
        notify: false,
        codeSync: false, // 不要发送任何文件改变事件给浏览器
        logSnippet: false,
        logFileChanges: false,
        logConnections: false,
        ghostMode: false,
        server: {
            baseDir: distBaseRoot + '/templates',
            index: "index.html",
            routes: {
                "/css": distBaseRoot + "/static/css",
                "/scss": distBaseRoot + "/static/scss",
                "/scripts": distBaseRoot + '/static/scripts',

                "/images": distBaseRoot + '/static/images',
                "/plus": distBaseRoot + '/static/plus',
                "/mock": distBaseRoot + '/static/mock',
                "/fonts": distBaseRoot + '/static/fonts'
            }
        },
        // startPath: "index.html"
    });
});


// 发布
gulp.task('03-build-jsp', function () {
    runSequence(['cleanDev', 'cleanDist'],
        // 'optimizeImages',
        ['distCopy', 'distHTML', 'distLess', 'distSass', 'distJS'],
        'distSync',
        // 'zip'
    );
});


// =====================================
// =====================================

gulp.task('PWASync', function () {
    var distBaseRoot = ".";

    browserSync.init({
        // @FIXME 代理不知道怎么配置
        // proxy: "http://192.168.1.250",
        // serveStatic: ['./templates'],

        server: {
            baseDir: distBaseRoot + '/templates',
            index: "index.html",
            routes: {
                "/css": distBaseRoot + "/static/css",
                "/scss": distBaseRoot + "/static/scss",
                "/scripts": distBaseRoot + '/static/scripts',

                "/images": distBaseRoot + '/static/images',
                "/plus": distBaseRoot + '/static/plus',
                "/mock": distBaseRoot + '/static/mock',
                "/fonts": distBaseRoot + '/static/fonts'
            }
        },
        port: 8033, // 端口注意
        ui: false,
        directory: true,
        notify: false,
        codeSync: false, // 不要发送任何文件改变事件给浏览器
        logSnippet: false,
        logFileChanges: false,
        logConnections: false,
        ghostMode: false
    });
});


// 配置 service worker
gulp.task('generateServiceWorker', () => {
    return workbox
        .generateSW({
            cacheId: 'gulp-pwa-mpa', // 设置前缀
            globDirectory: './templates',
            globPatterns: ['**/*.{html,js,css,png.jpg}'],
            globIgnores: ['sw.js'],

            // 输出到根目录
            swDest: `./templates/sw.js`,
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
                {
                    urlPattern: /.*\.js/,
                    handler: 'networkFirst', // 网络优先
                },
                {
                    urlPattern: /.*\.css/,
                    handler: 'staleWhileRevalidate', // 缓存优先同时后台更新
                    options: {
                        plugins: [
                            {
                                cacheableResponse: {
                                    statuses: [0, 200]
                                }
                            }
                        ]
                    }
                },
                {
                    urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
                    handler: 'cacheFirst', // 缓存优先
                    options: {
                        plugins: [
                            {
                                expiration: {
                                    maxAgeSeconds: 24 * 60 * 60, // 最长缓存时间,
                                    maxEntries: 50, // 最大缓存图片数量
                                }
                            }
                        ]
                    },

                },
                {
                    urlPattern: /.*\.html/,
                    handler: 'networkFirst',
                }
            ]
        })
        .then(() => {
            console.info('Service worker generation completed.');
        })
        .catch(error => {
            console.warn('Service worker generation failed: ' + error);
        });
});

// 离线方案
gulp.task('04-build-pwa', function () {
    runSequence(['cleanDev', 'cleanDist'],
        ['distCopy', 'distHTML', 'distLess', 'distSass', 'distJS'],
        'generateServiceWorker',
        // 'cleanDev',
        'PWASync',
        // 'zip'
    )
});


