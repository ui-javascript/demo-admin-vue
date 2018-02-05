// https://www.cnblogs.com/zhangyuezhen/p/7896047.html
// 严格模式
'use strict';

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
    reload = browserSync.reload;


// JS压缩
gulp.task('js', function () {
    return gulp.src('app/static/scripts/**/*.js')
        .pipe(plumber()) // 错误提示
        // .pipe(concat({ext: '.js'})) //合并同一目录下的所有文件
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('dist/static/scripts'))
});

// scss编译
gulp.task('sass', function(cb) { // cb是传入的回调函数
    return gulp.src('app/static/css/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(concat({ext: '.css'}))
        // .pipe(rename('all.min.css'))
        .pipe(minifyCss())
        .pipe(autoprefixer({
            browsers: ['> 1%', 'not ie <= 8']
        }))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/static/css'));

    // console.log('sass 文件处理完毕！');
    // cb(err);        // 如果 err 不是 null 和 undefined，流程会被结束掉，'two' 不会被执行
});


// less编译
gulp.task('less', function () {
    return gulp.src('app/static/css/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(concat({ext: '.css'})) //合并
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/static/css'))
});

// HTML压缩
gulp.task('html', function () {
    return gulp.src('app/views/**/*.html')
        .pipe(plumber())
        .pipe(minifyHtml())
        .pipe(gulp.dest('dist/views'))
});


// 图片压缩
gulp.task('images', function () {
    return gulp.src('app/static/images/**/*.{png,jpg,jpeg,ico,gif,svg}')
        .pipe(plumber())
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
            use: [pngquant()] // 使用 pngquant 深度压缩 png 图片
        }))
        .pipe(gulp.dest('dist/static/images'))
});

// 雪碧图
// 此功能是单一的并不与其他功能串联
gulp.task('sprite', function() {
    return gulp.src('app/static/images/sprite/!(sprite.png|*.css)')
        .pipe(spritesmith({
            imgName: 'ico.png',
            cssName: 'sprite.css'
        }))
        .pipe(gulp.dest('dist/static/images'));
});

// 浏览器同步刷新
// gulp.task('serve', function() {
//     browserSync.init({
//         proxy: "deva.dev",
//         port: 3001,
//         open: "ui",
//         ui: {port: 3005}
//     });
// });


// 删除dist/*下的所有文件
gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean())
});


// 打包
gulp.task('public', function () {
    return gulp.src('dist/*')
        .pipe(plumber())
        .pipe(zip('public.zip'))
        .pipe(gulp.dest('release'))
});

// watch监听
gulp.task('watch', function () {
    gulp.watch('app/static/scripts/**/*.js', ['js']);
    gulp.watch('app/static/css/**/*.less', ['sass', 'less']);
    gulp.watch('app/views/**/*.html', ['html']);
});


// gulp是并行的，需要指定一下顺序
gulp.task('redist', function () {
    runSequence('clean', ['html', 'sass', 'less', 'js', 'images', 'watch'])
});

// gulp命令 默认执行
gulp.task('default', ['redist']);