// 检查版本 需要执行
require('./check-versions')()

// 产品环境
process.env.NODE_ENV = 'production'

// 实现命令行环境的loading效果，和显示各种状态的图标
var ora = require('ora')

// 删除
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')

// 配置导入
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

// 开始构造环境
var spinner = ora('building for production...')
spinner.start()

// 删除原来的打包
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) {
        throw err
    }


    webpack(webpackConfig, function (err, stats) {
        // 停止加载
        spinner.stop()

        if (err) {
            throw err
        }


        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        // 提示打包需要在服务器环境下运行
        console.log(chalk.cyan(' Build complete.\n'))
        console.log(chalk.yellow(' 不放在服务器环境下，你绝壁看不了！！  '))
    })
})
