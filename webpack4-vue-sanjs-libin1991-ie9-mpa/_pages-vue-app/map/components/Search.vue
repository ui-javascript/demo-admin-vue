<template>
  <div>    
    <baidu-map>
      <bm-view class="map"></bm-view>
      <bm-local-search :keyword="keyword" :auto-viewport="true" :panel="true" :location="location" :selectFirstResult="true" @infohtmlset="result" ></bm-local-search>
    </baidu-map>
    <div class="search">
      <label><i>关键词：</i><input v-model="keyword"></label>
      <label><i>地区：</i><input v-model="location"></label>
    </div>    
  </div>  
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

// Vue.use(BaiduMap, {
//   ak: '7xuGNfbN2QQoGzzcGKR2UIF7v8WdfbiV'
// })

export default {
  name: "Search",
  data () {
    return {
      location: '深圳',
      keyword: '腾讯'
    }
  },
  methods:{
    result(poi){
      // 回调的以参数传出来
      console.log(poi)
      console.log(JSON.stringify(poi.point))
    }
  }
}
</script>

<style>
.map {
  width: 100%;
  height: 500px;
}

.search{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  height: 64px;  
  box-shadow: 0px -1px 4px rgba(0,0,0,0.1)
}

.search label{
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 64px;
}

.search i{
  flex-basis: 72px;
  display: flex;
}

.search label input{
  line-height: 32px;
  background-color: #ffffff;
  border: none;
  width:100%;
  color: #a3a3a3;
  padding-left: 12px; 
}
</style>