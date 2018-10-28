const path = require('path')
const glob = require('glob')
const fs = require('fs')

var myConfig = require("../../config/index")
var PAGES = myConfig.system.pages
var MODULES = myConfig.system.modules.replace(/\s+/g,"")

// 处理路径
function resolve(dir) {
    return path.join(__dirname, '../../' , dir)
}

// 配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
	let entries = [],
		basename, sections, moduledir, modulename, entrypath;
	let ie8tmpl = `index${myConfig.system.supportIE8?'-san':''}.js`
	glob.sync(globPath).forEach(function(entry) {

		// 不支持多级目录 因为玩嵌套是很糟心的
		basename = path.basename(entry, path.extname(entry));
		sections = entry.split('/').splice(-3);

		// 输出视图以module为前缀, 中划线分割
        moduledir = `${sections[0]}/${sections[1]}/`
		modulename = basename
        if (modulename.indexOf(sections[1]) != 0) {
            modulename = sections[1] + '-' + modulename
        }

		// 如果找不到入口文件, 就用模板
		entrypath = moduledir + basename + '.js'
        if (!fs.existsSync(entrypath)) {
			entrypath = 'src/assets/templates/' + ie8tmpl
        }

        entries.push({
			js: entrypath,
			template: moduledir + sections[2],
			name: modulename + '.html'
		});
	});
	return entries;
}

module.exports = getEntry;