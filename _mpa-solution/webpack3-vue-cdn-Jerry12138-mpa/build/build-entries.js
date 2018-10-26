const path = require('path')
const fs = require('fs')
const utils = require('./utils')
const customConf = require('../config/app.config')

const buildEntries = {}

/* 获取所有模块的文件夹名*/
const modules = fs.readdirSync(path.join(utils.resolve('src'), customConf.currentProject))

for (const moduleName of modules) {
  buildEntries[moduleName] = path.join(utils.resolve('src'), customConf.currentProject, moduleName, 'main.js')
}

module.exports = buildEntries
