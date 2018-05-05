// https://www.cnblogs.com/zhangyuezhen/p/7896047.html
// 代码检查可参考
// https://github.com/271626514/gulp-demo
// https://segmentfault.com/a/1190000010138466


// 严格模式
'use strict';

// 导入模块

// var path = require('path'),
//     fs = require('fs');

var gulp = require('gulp'),

    concat = require('gulp-concat-dir'), // 管合并，可以合并同一目录下的所有文件，好处是可以减少网络请求
    plumber = require('gulp-plumber'),   //错误处理提示插件
    zip = require('gulp-zip'),  // 压缩文件
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    runSequence = require('gulp-run-sequence'), // 控制task中的串行和并行

    uglify = require('gulp-uglify'),

    less = require('gulp-less'),
    sass = require('gulp-sass'),
    bourbon = require("bourbon").includePaths,
    neat = require("bourbon-neat").includePaths,

    minifyCss = require('gulp-minify-css'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),

    minifyHtml = require('gulp-minify-html'),

    imagemin = require('gulp-imagemin'), // 压缩图片
    pngquant = require('imagemin-pngquant'),
    spritesmith = require('gulp.spritesmith'),
    cache = require('gulp-cache'),
    clean = require('gulp-clean'), // 用来删除文件

    browserSync = require('browser-sync'),
    reload = browserSync.reload,

    stripDebug = require('gulp-strip-debug');

// 路径
var BASE_DEV_PATH = "./src";
var BASE_VIEWS_PATH = "./src/views";
var BASE_STATIC_PATH = "./assets";
var BASE_DIST_PATH = "./dist";

var PATHS = {
    html: BASE_VIEWS_PATH + "/**/*.html",
    htmlDist: BASE_VIEWS_PATH,
    scss: BASE_DEV_PATH + "/scss/**/*.scss",
    scssDist: BASE_DEV_PATH + "/scss",
    less: BASE_DEV_PATH + "/css/**/*.less",
    lessOutput: BASE_DEV_PATH + "/css/theme/**/_output.less",
    lessDist: BASE_DEV_PATH + "/css/theme",
    cssDist: BASE_DEV_PATH + "/css",
    scripts: BASE_DEV_PATH + "/scripts/**/*.js",
    scriptsDist: BASE_DEV_PATH + "/scripts",
    jsDist: BASE_DIST_PATH + "/js",
    images: BASE_STATIC_PATH + '/images/**/*.{png,jpg,jpeg,ico,gif,svg}',
    imagesDist: BASE_STATIC_PATH + "/images",
    sprite: BASE_STATIC_PATH + '/images/sprite/!(sprite.png|*.css)',
    plusDist: BASE_STATIC_PATH + "/plus",
    fontsDist: BASE_STATIC_PATH + "/fonts",
    mockDist: BASE_STATIC_PATH + "/mock"
};

// JS压缩
gulp.task('js', function () {
    return gulp.src(PATHS.scripts)
        .pipe(browserSync.reload({stream:true}))
});

// scss编译
gulp.task('sass', function (cb) { // cb是传入的回调函数

    return gulp.src(PATHS.scss)
        // .pipe(plumber())
        .pipe(sass({
            sourcemaps: true,
            includePaths: [bourbon, neat]
        }))
        // .pipe(concat({ext: '.css'}))
        // .pipe(rename('all.min.css'))
        .pipe(minifyCss())
        .pipe(autoprefixer({
            // browsers: ['> 1%', 'not ie <= 8']
        }))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATHS.scssDist))
        .pipe(browserSync.reload({stream:true}))



    cb(err);  // 如果 err 不是 null 和 undefined，流程会被结束掉，'two' 不会被执行
});


// less编译
gulp.task('less', function () {
    return gulp.src(PATHS.lessOutput) // 注意，只解析_output.less这样的单文件
        .pipe(browserSync.reload({stream:true}))
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        // .pipe(concat({ext: '.css'})) //合并
        .pipe(minifyCss())
        .pipe(gulp.dest(PATHS.lessDist))

});

// HTML压缩
gulp.task('html', function () {
    return gulp.src(PATHS.html)
        .pipe(browserSync.reload({stream:true}))
});


// 浏览器同步刷新
// http://www.browsersync.cn/docs/gulp/
gulp.task('sync', function() {
    browserSync.init({
        // proxy: "deva.dev",
        port: 80, //
        // open: "ui",
        ui: {
            port: 3005
        },
        directory: true,
        // browser: ["chrome", "firefox"],
        browser: "chrome",
        server: {
            baseDir: [BASE_VIEWS_PATH],
            index: "index.html",
            routes: {
                "/css": PATHS.cssDist,
                "/images": PATHS.imagesDist,
                "/plus": PATHS.plusDist,
                "/scripts": PATHS.scriptsDist,
                "/scss": PATHS.scssDist,
                "/mock": PATHS.mockDist
            }
        },
        // startPath: "index.html"
    });
});

// watch监听
gulp.task('watch', function () {
    gulp.watch(PATHS.scripts, ['js']);
    gulp.watch(PATHS.scss, ['sass']);
    gulp.watch(PATHS.less, ['less']);
    gulp.watch(PATHS.html, ['html']);
});



// gulp是并行的，
// 需要指定一下顺序
gulp.task('default', function () {
    runSequence('sync', ['html', 'less', 'sass','js', 'watch'])
});



// ====================================
// ====================================

// 雪碧图
// 此功能是单一的并不与其他功能串联
gulp.task('sprite', function () {
    return gulp.src(PATHS.sprite)
        .pipe(spritesmith({
            imgName: 'ico.png',
            cssName: 'sprite.css'
        }))
        .pipe(gulp.dest(PATHS.imagesDist));
});

// =====================================
// =====================================

// 删除dist/*下的所有文件
gulp.task('clean', function () {
    return gulp.src(['./assets/scripts/*',
        './assets/css/*', './assets/scss/*',
        './templates/*',
        './dist/*'],
        {read: false})
        .pipe(clean())
});

// 图片压缩
gulp.task('images', function () {
    return gulp.src(PATHS.images)
        .pipe(plumber())
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
            use: [pngquant()] // 使用 pngquant 深度压缩 png 图片
        }))
        .pipe(gulp.dest(PATHS.imagesDist))
    // .pipe(browserSync.reload({stream:true}))
});

// 缩编JS
gulp.task('distJs', function () {
    return gulp.src(PATHS.scripts)
        .pipe(plumber()) // 错误提示
        // .pipe(concat({ext: '.js'})) //合并同一目录下的所有文件
        .pipe(stripDebug())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./assets/scripts'))
});

// 缩编HTML
gulp.task('distHtml', function () {
    return gulp.src(PATHS.html)
    .pipe(plumber())
    .pipe(minifyHtml())
    .pipe(gulp.dest('./templates'))
});

// scss编译
gulp.task('distSass', function () { // cb是传入的回调函数

    return gulp.src(PATHS.scss)
    // .pipe(plumber())
        .pipe(sass({
            sourcemaps: true,
            includePaths: [bourbon, neat]
        }))
        // .pipe(concat({ext: '.css'}))
        // .pipe(rename('all.min.css'))
        .pipe(minifyCss())
        .pipe(autoprefixer({
            // browsers: ['> 1%', 'not ie <= 8']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/scss'))
});


// less编译
gulp.task('distLess', function () {
    return gulp.src(PATHS.lessOutput) // 注意，只解析_output.less这样的单文件
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        // .pipe(concat({ext: '.css'})) //合并
        .pipe(minifyCss())
        .pipe(gulp.dest('./assets/css/theme'))
});


// 压缩
gulp.task('zip', function () {

    return gulp.src(["templates/**", "assets/**"])
        .pipe(plumber())
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('./'))
});

// 发布
gulp.task('release', function () {
    // runSequence('clean', 'images', ['distHtml', 'distLess', 'distSass','distJs'], 'unzip')
    runSequence('clean', ['distHtml', 'distLess', 'distSass','distJs'], 'zip')
});
