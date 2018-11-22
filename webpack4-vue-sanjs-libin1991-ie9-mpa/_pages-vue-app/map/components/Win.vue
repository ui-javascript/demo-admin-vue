<template>
  <div class="win-box">
    <div class="win-msg">      
      <div class="shop-msg">
        <div class="title">{{chosed.msg}}</div>
        <div class="distance">距离我{{(chosed.dis*chosed.zoom).toFixed(2)}}KM</div>
      </div>
      <textarea class="msg" name="msg" id="" cols="30" rows="5" placeholder="请输入留言..."></textarea>
      <div class="user-msg">
        <div class="left">
          <div><span>收货人：</span>{{user.name}}</div>
          <div><span>电话：</span>{{user.tel}}</div>
          <div><span>地址：</span>{{user.address}}</div>
        </div>
        <div class="right" >
          <i class="right-icon fa-li fa fa-chevron-right"></i>
        </div>
      </div>
    </div>    
    <button>确认下单</button>
  </div>
</template>

<script>



export default {
  name: 'Win',
  props:{
    chosed: Object
  },
  data(){
    return {
      show: false,
      user:{
          name: '张漠北' ,
          tel: "13536543654",
          address: "广东省深圳区"
        }
    }
  },
  computed:{
    KM:function(){
      return (chosed.dis*chosed.zoom).toFixed(2)
    }
  },
  methods: {
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    },
    clickHandler (e) {
      alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
    },
    addPoints () {
      const points = [];
      for (var i = 0; i < 1000; i++) {
        const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
        points.push(position)
      }
      this.points = points
    }
  }
}
</script>

<style>
.win-msg {
  display:flex;
  flex-direction: column;  
  background:#ffffff;
  padding: 0 12px 12px;
  border: none;
  font-size: 14px;
}
.title{
  font-weight: bold;
}
.msg{
  flex: 1;
  border:none;
  padding: 0;
  font-size: 14px;
  padding-top:10px;
  background: #f5f5f5f5;
  text-indent: 10px;
}
.shop-msg{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-radius: 8px;
  border-bottom: 0.5px solid #f1f1f1;  
}

.user-msg{
  border-top: 0.5px solid #f1f1f1;
  flex-grow:1;
  display: flex;
}
.left{
  flex-grow:1;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.left div{
  padding: 12px 0 0 0;
}
.left span{
  color:gray;
}
.right{
  display: flex;
  padding: 12px 0 0 0;
  /* flex-grow: 1; */
}
.right-icon{
  color: gray;
  position: relative;
  line-height: 30px;
  margin-top: -15px;
  text-align: right;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
}

.distance{
  color: gray;
  font-size: 12px;
}

button{
  height: 44px;
  width:100%;
  line-height: 40px; 
  background-color: #18A656;
  color:#ffffff;
  font-size: 16px;
  border:none;
}
</style>