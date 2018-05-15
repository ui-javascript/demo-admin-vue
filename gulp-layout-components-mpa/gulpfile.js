/**
 * 主要内容参考 (NICE)https://www.cnblogs.com/zhangyuezhen/p/7896047.html
 *
 * eslint
 *
 * https://github.com/271626514/gulp-demo
 * https://segmentfault.com/a/1190000010138466
 *
 * 辅助功能参考 (NICE)https://github.com/mjzhang1993/gulp-template
 * @TODO PWA支持
 *
 * 2015年结合了webpack的，有一些可以参考一下
 * https://github.com/fwon/gulp-webpack-demo
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
        .pipe(cleanCss())
        .pipe(autoprefixer({
            // browsers: ['> 1%', 'not ie <= 8']
        }))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATHS.scssDevFolder))
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
        .pipe(gulp.dest(PATHS.lessDevThemeFolder))

    cb(err);
});

// 编译devHtml
gulp.task('devHtml', function () {
    return gulp.src(PATHS.html)
        .pipe(plumber())
        .pipe(fileInclude())
        .pipe(gulp.dest(PATHS.htmlDevFolder))
});


// 浏览器同步刷新
// http://www.browsersync.cn/docs/gulp/
gulp.task('devSync', function () {
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
            baseDir: [PATH_VIEWS],
            // index: "index.html",
            routes: {
                "/css": PATHS.lessDevFolder,
                "/scss": PATHS.scssDevFolder,
                "/scripts": PATHS.scriptsDevFolder,

                "/images": PATHS.imagesFolder,
                "/plus": PATHS.plusFolder,
                "/mock": PATHS.mockFolder,
                "/fonts": PATHS.fontsFolder
            }
        },
        // startPath: "index.html"
    });

    // 文件监听
    gulp.watch(PATHS.html).on('change', reload);
    gulp.watch(PATHS.scripts).on('change', reload);
    gulp.watch(PATHS.scss, ['compileSass']).on('change', reload);
    gulp.watch(PATHS.less, ['compileLess']).on('change', reload);
});

gulp.task('distSync', function () {
    var distBaseRoot = "."
    browserSync.init({
        // proxy: "deva.dev",
        port: 8033, //
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

gulp.task('PWASync', function () {
    browserSync.init({
        proxy: "http://192.168.1.250", //后端服务器地址
        serveStatic: ['./templates'],
        port: 8033, //
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



// 默认任务
gulp.task('default', function () {
    runSequence(['cleanDev', 'cleanDist'], ['devSync']);
});
gulp.task('01-build-dev', function () {
    runSequence(['cleanDev', 'cleanDist'],
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
gulp.task('distHtml', function () {
    return gulp.src(PATHS.html)
        .pipe(plumber())
        .pipe(minifyHtml())
        .pipe(fileInclude())
        .pipe(gulp.dest('./templates'))
    // .pipe(md5(10));
});

// 搬运一些未正确归类的文件
gulp.task('distCopy', function () {
    return gulp.src([PATHS.htmlFolder + '/**/*.*', '!' + PATHS.html])
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


// 发布
gulp.task('03-build-jsp', function () {
    runSequence(['cleanDev', 'cleanDist'],
        // 'optimizeImages',
        ['distCopy', 'distHtml', 'distLess', 'distSass', 'distJS']
        // 'distSync',
        // 'zip'
    );
});


// =====================================
// =====================================

// 配置 service worker
gulp.task('generateServiceWorker', () => {
    return workbox
        .generateSW({
            cacheId: 'gulp-pwa-mpa', // 设置前缀
            globDirectory: './templates',
            globPatterns: ['**/*.{html,js,css,png.jpg}'],
            globIgnores: ['sw.js'],
            swDest: `./sw.js`,
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
        ['distCopy', 'distHtml', 'distLess', 'distSass', 'distJS'],
        'generateServiceWorker',
        // 'cleanDev',
        'distSync'
        // 'zip'
    )
});


