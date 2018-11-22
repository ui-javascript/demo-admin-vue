<template>
  <div >
    <div id="allmap"></div>
    <baidu-map class="map" :center="points[0].pos" :zoom="12" @click="tar"  @ready="getMyPiont"> 
      <!-- 单点 -->
      <bm-marker       
        :position="item.pos" 
        :dragging="true" 
        @click="infoShow" 
        v-for="(item,index) in distances"
        :key="index"            
        >    
        <bm-label
          :content="index+1+''"
          :offset="{width: 5, height: 2}"
          :labelStyle="{
            color: 'white', 
            fontSize : '12px',
            backgroundColor:'transparent',
            border:0 }"
        />
      </bm-marker>  
    <!-- <bm-view class="map"></bm-view>
    <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search> -->
    </baidu-map>
    <!-- <label>关键词：<input v-model="keyword"></label>
    <label>地区：<input v-model="location"></label> -->
    
  </div>  
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // 记得更换自己的ak值
  ak: '请输入自己的ak码'
})

let temp;
// alert(temp)
let dingwei;


export default {
  name: "Map",
  props:{
    dw: Object
  },
  data () {
    return {
      show: false,       
      showContent: "我是展示数据",
      points:[ 
        {
          pos: {lng: 114.021199, lat: 22.552821}, 
          msg: "南山分店",
          dis: '',
        },        
        {
          pos: {lng: 113.885663, lat: 22.58259}, 
          msg: "罗湖分店",
          dis: '',
        },
        {
          pos: {lng: 113.95494, lat: 22.551919}, 
          msg: "宝安分店",
          dis: '',
        },        
      ],
      distances:[]
    }  
  },    
  methods: {  
    // 获取定位
    getMyPiont(){
      var map = new BMap.Map("allmap");   
      var point = new BMap.Point(113.95494,22.551919);
      map.centerAndZoom(point,12);   
      
      let points = this.points;
      let quickSort = this.quickSort;
      let distances = this.distances

      var geolocation = new BMap.Geolocation();
      // 开启SDK辅助定位
      geolocation.enableSDKLocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point); // 这里是定位跳转
          // alert('您的位置：'+r.point.lng+','+r.point.lat); 

          // 給变量复制后，留待加载时再赋予过去
          dingwei = {
            lng: r.point.lng,
            lat: r.point.lat
          }         
          // console.log(points)
          // console.log(dingwei)
          
          let arr =[];
          let len = points.length;
          
          for(let i =0 ;i< len ;i++){        
            points[i].dis = Math.sqrt((points[i].pos.lng - dingwei.lng)**2 + (points[i].pos.lat- dingwei.lat)**2) 
          }       
          quickSort(points);

          distances.splice(0,0,...points)
          console.log(distances)
        }
        else {
          // alert('failed'+this.getStatus());
        }        
      });      
      // 百度地图API功能

      // 給父级传参
      this.$parent.chosed = {
          num: 1,// 获取对应的编号
          zoom: 12,// 获取对应地图放大倍数
          pos: this.points[0].pos,
          msg: this.points[0].msg,
          dis: this.points[0].dis,
      }

    }, 
    // 对比互换
    swap(myArray, firstIndex, secondIndex){
        var temp = myArray[firstIndex];
        myArray[firstIndex] = myArray[secondIndex];
        myArray[secondIndex] = temp;
    },
    partition(myArray, left, right) {
        var pivot   = myArray[Math.floor((right + left) / 2)],
            i       = left,
            j       = right;

        while (i <= j) {
            while (myArray[i].dis < pivot.dis) {   // 增加了对应的属性dis作为对比内容
                i++;
            }

            while (myArray[j].dis > pivot.dis) {   // 增加了对应的属性dis作为对比内容
                j--;
            }

            if (i <= j) {
                this.swap(myArray, i, j);
                i++;
                j--;
            }
        }
        return i;
    },
    quickSort(myArray, left, right){
      if (myArray.length < 2) return myArray;
      left = (typeof left !== "number" ? 0 : left);
      right = (typeof right !== "number" ? myArray.length - 1 : right);
      var index  = this.partition(myArray, left, right);
      if (left < index - 1) {
        this.quickSort(myArray, left, index - 1);
      }
      if (index < right) {
        this.quickSort(myArray, index, right);
      }
      return myArray;
    },    
    infoShow (event) {   
      let index = event.currentTarget.Bc.innerText-1; // 编号要减回来
      this.$parent.chosed = {
          num: event.currentTarget.Bc.innerText,// 获取对应的编号
          zoom: event.currentTarget.map.Oa,// 获取对应地图放大倍数
          pos: this.points[index].pos,
          msg: this.points[index].msg,
          dis: this.points[index].dis,
      }
      console.log(this.$parent.chosed);
    },
    tar(event){
      console.log(event.currentTarget)
    }
  }
}

</script>

<style>
.map {
  width: 100%;
  height: 500px;
}
</style>