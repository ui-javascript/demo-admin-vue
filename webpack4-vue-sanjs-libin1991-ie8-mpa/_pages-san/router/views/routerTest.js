// require("babel-polyfill")
require("es5-polyfill")
// require('es6-promise/auto');

//IE8 ^4.5.10
// require('es5-shim');
// require('es5-shim/es5-sham');

// require('object-create-ie8')
require('object-defineproperty-ie8')
require('console-polyfill')

//比IE8的JSON好用
// require('json3');
//性能超高的Promise实现
// require('bluebird')
// require('fetch-polyfill2')


// import san from 'san'
// var san = require('san')
window.San = require('san')

require("./san.scss")

// import {router} from 'san-router'
var router = require('san-router').router

// import HelloApp from './views/HelloApp.san'
// import HelloApp2 from './views/HelloApp2.san'
var HelloApp = require('./views/HelloApp.san');
var HelloApp2 = require('./views/HelloApp2.san');

console.log('hello webpack San')

// 这是控制路由，引入San组件
router.add({rule: '/', Component: HelloApp, target: '#app'})
router.add({rule: '/p1', Component: HelloApp, target: '#app'})
router.add({rule: '/p2', Component: HelloApp2, target: '#app'})

// 一定要记得启动
// router.setMode('html5')
router.start()
