import Vue from 'vue'
import App from './App.vue'
import { NavBar, Toast } from 'vant'
import { Tab, Tabs } from 'vant'
import router from './router'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Tab).use(Tabs);
Vue.use(Tabbar).use(TabbarItem);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
