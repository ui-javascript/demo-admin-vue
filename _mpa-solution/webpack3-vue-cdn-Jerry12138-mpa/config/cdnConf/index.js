
const fs = require('fs')

let modules = fs.readdirSync('config/cdnConf')
modules = modules.map(item => item.replace(/\.js$/, ''))
modules = modules.filter(item => item !== 'index')

const requirePackage = {}
for (let i = 0; i < modules.length; i++) {
  requirePackage[modules[i]] = require('./' + modules[i])
}

module.exports = requirePackage
