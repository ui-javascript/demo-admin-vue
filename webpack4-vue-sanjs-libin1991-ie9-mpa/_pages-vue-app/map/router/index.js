import Vue from 'vue'
import Router from 'vue-router'
import MapPage from '../pages/MapPage'
import SearchPage from '../pages/SearchPage'
// import BaiduMap from 'vue-baidu-map'
 
Vue.use(Router)

// Vue.use(BaiduMap, {
//   ak: '7xuGNfbN2QQoGzzcGKR2UIF7v8WdfbiV'
// })

export default new Router({
  routes: [
    {      
      path: '/',
      name: 'MapPage',
      component: MapPage,     
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage
    },
    
    
  ]
})
