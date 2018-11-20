// require("babel-polyfill")
require("es5-polyfill")

//IE8 ^4.5.10
require('es5-shim');
require('es5-shim/es5-sham');
require('object-create-ie8');
// import 'object-defineproperty-ie8';
require('console-polyfill');

//比IE8的JSON好用
// import 'json3';
//性能超高的Promise实现
// import 'bluebird';
// import 'fetch-polyfill2';

require("./san.scss")

// import { router } from 'san-router'
var sanRouter = require('san-router');
console.log(sanRouter)
var router = sanRouter.router;


// import HelloApp from './views/HelloApp.san'
// import HelloApp2 from './views/HelloApp2.san'
var HelloApp = require('./views/HelloApp.san');
var HelloApp2 = require('./views/HelloApp2.san');

console.log('hello webpack San')

// 这是控制路由，引入San组件
// 不要问我怎么知道，看官方demo学来的。这个东西坑了我好久
router.add({rule: '/', Component: HelloApp, target: '#app'})
// router.add({rule: '/p1', Component: HelloApp, target: '#app'})
router.add({rule: '/p2', Component: HelloApp2, target: '#app'})


// 一定要记得启动
// router.setMode('html5')
router.start()


