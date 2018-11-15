require('../assets/css/theme/vux/_output.less');

import Vue from 'vue';
// 过滤
import vueFilter from '../utils/filters/vueFilter';

//解决click点击300毫秒延时问题
import FastClick from 'fastclick';
FastClick.attach(document.body);



// 注册时，vux必须放在 import Vue from 'vue';
// 之前，否侧打包的体积非常大，估计是vux OR vue 抽风了
import { AlertPlugin, LoadingPlugin } from 'vux'
// 全局注册
Vue.use(AlertPlugin);
Vue.use(LoadingPlugin);


import C from './conf';
import M from './common';
export default {
    M, C
}