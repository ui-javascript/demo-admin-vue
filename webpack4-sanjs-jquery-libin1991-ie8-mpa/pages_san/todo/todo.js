// 为兼容 ES5 浏览器环境（主要是 IE8 ~ IE11）而引入的 polyfill，对兼容性没有要求的项目可以不写此行
import 'babel-polyfill'
require("es5-polyfill")
// import 'es5-shim'; //IE8 ^4.5.10
require('es5-shim')
// require('es5-shim/es5-sham')

import 'object-create-ie8';//IE8, 我写的库，这样就不用加上es5-sham
import 'object-defineproperty-ie8';//IE8， 我写的库
import 'console-polyfill';

import san from 'san'

// style
require('font-awesome/css/font-awesome.min.css')
require('./main.css')

// route
import List from './todo/List'
import Form from './todo/Form'
import AddCategory from './category/Add'
import EditCategory from './category/Edit'

import {router} from 'san-router'

router.add({rule: '/', Component: List, target: '#app'});
router.add({rule: '/todos/category/:category', Component: List, target: '#app'});
router.add({rule: '/add', Component: Form, target: '#app'});
router.add({rule: '/edit/:id', Component: Form, target: '#app'});
router.add({rule: '/category/add', Component: AddCategory, target: '#app'});
router.add({rule: '/category/edit', Component: EditCategory, target: '#app'});

// start
router.start()
