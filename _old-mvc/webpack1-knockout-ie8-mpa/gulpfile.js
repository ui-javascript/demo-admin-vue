var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var webpack = require('webpack');

var config = require('./webpack.prod.config.js');

gulp.task('default', ['prod']);

// 生产环境： 使用webpack编译
gulp.task('prod', ['clean'], function (callback) {
  webpack(config, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('prod: build-webpack', err);
    }
    gutil.log('[prod: build-webpack]', stats.toString({
      colors: true
    }));
    return callback();
  });
});

// 清空上次编译结果
gulp.task('clean', function () {
  return gulp.src([
    config.output.path
  ]).pipe(clean({force: true}));
});
