import Vue from 'vue';
import VueAMap from 'vue-amap';
import { lazyAMapApiLoaderInstance } from 'vue-amap';
import App from './AppAMap.vue';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: '2378a12287ca8c4d881a691d32ae5cc5',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.6'
});

// lazyAMapApiLoaderInstance.load().then(() => {
//     // your code ...
//     new AMap.Map('amapContainer', {
//         center: new AMap.LngLat(121.59996, 31.197646)
//     });
// });

new Vue({
    el: '#app',
    render: h => h(App)
})
