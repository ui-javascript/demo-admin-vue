// POSTCSSs深入系列
// https://www.w3cplus.com/PostCSS/using-postcss-together-with-sass-stylus-or-less.html
// 导入模块
var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    cssmin = require('gulp-clean-css');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');


// 定义任务
gulp.task('compileLess', function () {
    var processors = [ autoprefixer, cssnano ];

    gulp.src('./**/css/**/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(postcss(processors))
        // gulp-clean-css {rebase: false }
        .pipe(cssmin({compatibility: 'ie7', inline: ['remote'], rebase: false })) // 兼容ie7 @import fix
        .pipe(gulp.dest('./')); // 相对路劲下生成
});

// 监控
gulp.task('watchLessCompile', function () {
    gulp.watch('./**/css/**/*.less', ['compileLess']);
});