/**
 * 助手
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')

// 引入路径常量
const consts = require('./consts')

// 获取入口
const getEntry = () => {
  const entry = {}

  fs.readdirSync(consts.STATIC).forEach(value => {
    const path = `${consts.STATIC}/${value}/scripts`

    console.log(path)
    // common文件夹入口
    entry[value] = fs.existsSync(`${path}.js`) ? `${path}.js` : `${path}/index.js`
  })

  return entry
}


// 视图
const getPlugins = () => {
  const plugins = []

  // 除common文件夹都需要打包单页面
  fs.readdirSync(consts.VIEWS).filter(value => value !== 'common').forEach(value => {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${value.split('.')[0]}.html`,
        template: `${consts.VIEWS}/${value}`,
        inject: false
      })
    )
  })

  return plugins
}

module.exports = {
  getEntry,
  getPlugins
}
