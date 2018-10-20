let path = require('path')
let glob = require('glob')
var PAGES = require("./package.json").myConfig.PAGES

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
	let entries = [],
		basename, tmp, pathname, appname;

	glob.sync(globPath).forEach(function(entry) {
		basename = path.basename(entry, path.extname(entry));
		tmp = entry.split('/').splice(-3);
		pathname = basename; // 正确输出js和html的路径
		entries.push({
			js: tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
			html: tmp[0] + '/' + tmp[1] + '/' + tmp[2],
			name: tmp[2]
		});
	});
	return entries;
}

let pages = getEntry(`./${PAGES}/**?/*.html`);
console.log(pages)

module.exports = pages;