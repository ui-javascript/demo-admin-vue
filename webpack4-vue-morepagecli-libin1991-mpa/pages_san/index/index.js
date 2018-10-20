// import 'babel-polyfill'
// require("babel-polyfill")
// require("es5-polyfill")
import 'es5-shim'; //IE8 ^4.5.10
// require('es5-shim')
// require('es5-shim/es5-sham')

import 'object-create-ie8';//IE8, 我写的库，这样就不用加上es5-sham
import 'object-defineproperty-ie8';//IE8， 我写的库
import 'console-polyfill';

//IE8下，如果你不打开开发者工具，window下是没有console这个对象的，
//只有打开了F12才会有这个方法

import 'json3';  //比IE8的JSON好用
import 'bluebird'; //性能超高的Promise实现
import 'fetch-polyfill2'; //fetch 实现，我的另一力作


import san from 'san'

import {router} from 'san-router'
import HelloApp from './HelloApp.san'
import HelloApp2 from './HelloApp2.san'

console.log('hello webpack San')

// 这是控制路由，引入San组件
// 不要问我怎么知道，看官方demo学来的。这个东西坑了我好久
router.add({rule: '/', Component: HelloApp, target: '#app'})
router.add({rule: '/san', Component: HelloApp2, target: '#app'})

// 一定要记得启动
router.start()
