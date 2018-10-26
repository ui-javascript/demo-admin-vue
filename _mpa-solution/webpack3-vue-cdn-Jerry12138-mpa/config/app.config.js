const path = require('path')
const fs = require('fs')
const selfCdn = require('./cdnConf/index')
// 设置默认活动页的路径，优先级：命令中参数 > currentProject配置 ，如果都不存在，则打包project中第一个活动

const currentProject = 'test'
const use = 'ali' // ali 或 qiniu
const isUpload = false // 是否需要上传至cdn

/* 获取所有模块的文件夹名*/
const modules = fs.readdirSync(path.join(__dirname, '..', 'src/project'))
const argvPath = process.argv.splice(2)[0]
let realProject
if (modules.indexOf(argvPath) !== -1) {
  realProject = argvPath
} else {
  if (modules.indexOf(currentProject) !== -1) {
    realProject = currentProject
  } else {
    realProject = modules[0]
  }
}

// 未设置则置空
if (typeof selfCdn[realProject] !== 'object' || Object.keys(selfCdn[realProject]).length === 0) {
  selfCdn[realProject] = {
    js: {}, css: {}
  }
}

// 生成externals配置
const externalsConf = {}
const tempjs = selfCdn[realProject].js
for (const key in tempjs) {
  externalsConf[tempjs[key].packageName] = key
}

console.log(`您正在操作 ${realProject} 页面`)

const config = {
  currentProject: `project/${realProject}`,
  use,
  isUpload,
  qiNiuCdn: {
    host: '',
    bucket: '',
    ak: '',
    sk: '',
    zone: '',
    prefix: ''
  },
  aLiOss: {
    host: '',
    accessKeyId: '',
    accessKeySecret: '',
    bucket: '',
    region: '',
    prefix: ''
  },
  cdnLink: selfCdn[realProject],
  externalsConf: externalsConf
}

config.uploadPath = use === 'ali' ? config.aLiOss : config.qiNiuCdn
// console.log(config)
module.exports = config
