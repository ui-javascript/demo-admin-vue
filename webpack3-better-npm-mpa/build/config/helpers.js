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

  fs.readdirSync(consts.ENTRIES).forEach(value => {
    const path = `${consts.ENTRIES}/${value}/scripts`

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

    let filename
    if (process.env.NODE_ENV === 'development') {
      filename = `./${value.split('.')[0]}.html`
    } else {
      filename = `${consts.TEMPLATES}/${value.split('.')[0]}.html`
    }

    plugins.push(
      new HtmlWebpackPlugin({
        filename: filename,
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
