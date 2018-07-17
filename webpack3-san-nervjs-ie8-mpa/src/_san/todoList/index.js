// 为兼容 ES5 浏览器环境（主要是 IE8 ~ IE11）而引入的 polyfill，对兼容性没有要求的项目可以不写此行
import 'babel-polyfill'

// style
// require('font-awesome/css/font-awesome.min.css')
require('./main.css')

import san from 'san'

// route
import List from './todo/List.san'
import Form from './todo/Form.san'
import AddCategory from './category/Add.san'
import EditCategory from './category/Edit.san'

import {router} from 'san-router'

router.add({rule: '/', Component: List, target: '#app'});
router.add({rule: '/todos/category/:category', Component: List, target: '#app'});
router.add({rule: '/add', Component: Form, target: '#app'});
router.add({rule: '/edit/:id', Component: Form, target: '#app'});
router.add({rule: '/category/add', Component: AddCategory, target: '#app'});
router.add({rule: '/category/edit', Component: EditCategory, target: '#app'});

// start
router.start()

console.log('a')
