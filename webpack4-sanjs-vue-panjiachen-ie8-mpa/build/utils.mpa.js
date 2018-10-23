let path = require('path')
let glob = require('glob')
var myConfig = require("./project.config")
var PAGES = myConfig.PAGES
var MODULES = myConfig.MODULES.replace(/\s+/g,"")

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
	let entries = [],
		basename, tmp, modulename;

	glob.sync(globPath).forEach(function(entry) {
		basename = path.basename(entry, path.extname(entry));
		tmp = entry.split('/').splice(-3);

		// 输出视图以module为前缀
		modulename = basename
		if (modulename.indexOf(tmp[1]) != 0) {
			modulename = tmp[1] + '-' + modulename
		}

    entries.push({
			js: tmp[0] + '/' + tmp[1] + '/' + basename + '.js',
			template: tmp[0] + '/' + tmp[1] + '/' + tmp[2],
			name: modulename + '.html'
		});
	});
	return entries;
}

let pages = getEntry(`./${PAGES}/${MODULES}/*.html`);
module.exports = pages;
