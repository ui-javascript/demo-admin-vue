<template>
  <div class="top-box">
    <i class="back-icon fa-li fa fa-chevron-left"></i>
    <div>分店</div>
    <router-link to="/search">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Top',  
}
</script>

<style>
.top-box {
  position: absolute;
  left:0;
  right:0;
  z-index:1;
  height:44px;
  display:flex;
  flex-direction: column;  
  background:#ffffff;
  border: none;
  font-size: 16px;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.15);
  display:flex;
  flex-direction: row;
}

.top-box i{
  width:30px;
  height:30px;
  font-size:14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-box div{
  flex-grow:1;
  align-self: center;
  text-indent: -15px;
}

.back-icon{
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
.top-box span{
  display: flex;
  align-items: center;
}

</style>