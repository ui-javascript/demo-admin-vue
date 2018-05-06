/**
 * 路径常量
 */
const path = require('path')

// 开发、调试端口
const DEV_PORT = 8083

// 源码目录
const SRC = path.resolve('../src')
// 构建目录
const DIST = path.resolve('../dist')

// 页面目录
const VIEWS = `${SRC}/views`
// const VIEWS = path.resolve('../templates')

// 静态资源目录
const ENTRIES = `${SRC}/entries`

// 脚本路径
const SCRIPTS = 'static/scripts/'
// 样式路径
const STYLES = 'static/styles/'

// 图片路径
const IMAGES = 'static/images/'

const TEMPLATES = process.env.NODE_ENV === 'development' ? 'views' : 'templates'

// CDN
// 1. 开发时为：/；
// 2. 构建时为：//lrcdn.cn/${PROJECT}/；

// const CDN_URL = '//lrcdn.cn/project/'
const CDN_URL = '/'
const CDN = process.env.NODE_ENV === 'development' ? '/' : CDN_URL

module.exports = {
  DEV_PORT,
  SRC,
  DIST,
  VIEWS,
  ENTRIES,
  SCRIPTS,
  STYLES,
  IMAGES,
  CDN,
  TEMPLATES
}
