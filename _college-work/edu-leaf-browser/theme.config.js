const fs = require('fs') // 文件系统
const path = require('path') // 路径处理
const lessToJs = require('less-vars-to-js')

module.exports = () => {
  const themePath = path.join(__dirname, './src/themes/default.less')
  return lessToJs(fs.readFileSync(themePath, 'utf8'))
}
