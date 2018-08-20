const config = require('../../config/index')
const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

// 浏览器同步刷新
// http://www.browsersync.cn/docs/gulp/
gulp.task('devSync', function () {
    browserSync.init({
        port: 8888,
        ui: {
            port: 3005
        },
        directory: true,
        browser: "chrome",
        server: {
            baseDir: `${config.common.templatesDir}`,
            routes: {
                '/static': `${config.common.staticDir}`
            }
        },
        // startPath: "index.html"
    });

    // 文件监听
    // fileInclude + browserSync https://www.cnblogs.com/yjzhu/archive/2017/02/27/6474854.html
    gulp.watch(`${config.dev.pagesDir}/**/*.html`, ['compileHTML']).on('change', reload);
    gulp.watch(`${config.dev.scriptsDir}/**/*.js`, ['compileJS']).on('change', reload);
    gulp.watch(config.dev.stylesWatchFiles, ['compileLess']).on('change', reload);
});

gulp.task('distSync', function () {
    browserSync.init({
        // proxy: "deva.dev",
        port: 80, //
        ui: false,
        directory: true,
        notify: false,
        codeSync: false, // 不要发送任何文件改变事件给浏览器
        logSnippet: false,
        logFileChanges: false,
        logConnections: false,
        ghostMode: false,
        server: {
            baseDir: `${config.common.templatesDir}`,
            // index: "index.html",
            routes: {
                '/static': `${config.common.staticDir}`
            }
        },
        // startPath: "index.html"
    });
});


gulp.task('PWASync', function () {

    browserSync.init({
        // @FIXME 代理不知道怎么配置
        // proxy: "http://192.168.1.250",
        // serveStatic: [`${config.common.templatesDir}`],

        server: {
            baseDir: `${config.common.templatesDir}`,
            index: "index.html",
            routes: {
                '/static': `${config.common.staticDir}`
            }
        },
        port: 8777, // 端口注意
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