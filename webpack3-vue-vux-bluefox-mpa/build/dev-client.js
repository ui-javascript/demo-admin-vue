/* eslint-disable */

// 让IE浏览器支持EventSource
// SSE 服务端发送时间
require('eventsource-polyfill')

// 热重载
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

// 服务端发出浏览器重载的请求
hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload()
    }
})
