//let target = "http://192.168.2.29:1337";
//let target = "http://cppm-backend.service.consul:1337"
let target = "http://192.168.2.22:30000/"

let proxy = {
	'/api/**':{
		target: target,
		pathRewrite: {"^/api" : ""},//去掉请求url前面的/api
		changeOrigin: true,
		secure: false,
		headers: {
			// Cookie: true
		}
	}
}

function bypass(req, res, proxyOptions) {
	let colors = require('colors');
	//打印代理请求日志
	let proxylog = function (type, from, to, method) {
		console.log('[' + type + '] ' + colors.cyan.underline(from) + ' -> ' + colors.yellow.underline(to) + ' -> ' + colors.red.underline(method))
	}

	//路由规则
	delete require.cache[require.resolve('./rules.js')];
	let ruleConfig = require('./rules.js');
	
	//从路由规则中查找匹配当前url的
	let matchedRule = ruleConfig.rules.find(config => {
		if(config.url instanceof RegExp){
			return config.url.test(req.url);
		}
		return req.url.startsWith(config.url);
	});

	//如果查找到符合的路由规则
	if (matchedRule) {
		if (matchedRule.local) {
			let localFilePath = '/localsproxy/data/' + req.path.replace(/\//g, '.').substring(1) + '.json';
			proxylog('localfile', req.url, localFilePath, req.method);
			return localFilePath;
		}
	}
	
	proxylog('proxy', req.url, proxyOptions.target + req.url, req.method);
	return false;
}

Object.keys(proxy).forEach(function (key) {
	proxy[key].bypass = bypass;
});

module.exports = proxy;