// 配置webpack proxy bypass的规则
// 针对特定path的处理规则，若不定义，则直接转发到target
// local取值：
// false：直接转发到target服务器
// true：拦截并以默认命名规则返回本地json文件，命名规则为：/a/b/c -> /locals/a.b.c.json
exports.rules = [{
	url: '/api/user/list',
	local: false
}, {
	url: /^\/api\/task\/assignment\/\S*$/i,
	local: false
}]