<template>
  <div :style="{display:visible?'inline-block':'none'}">
    <div class="mask-layer" >
    </div>
    <div class="popup-content" >
      <div style="margin:10.5px">
        <p class="close clearfix">
          <img src="../common/images/close (1).png" alt="" @click="close">
        </p>
        <p class="text">助力活动已结束！感谢您的关注</p>
        <p class="btn">
          <a href="index.html">去看看其他亲子福利</a>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        popupVisible: false
      }
    },
    methods: {
      close() {
        this.popupVisible = false
        this.$emit('close')
      }
    },
    mounted() {
      this.popupVisible = this.visible
    }
  
  }
</script>

<style lang="less" scoped>
  .mask-layer{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background:rgba(0,0,0,1);
    opacity:0.3;
    z-index: 100;
  }
      .popup-content{
        width:580/750 *100%;
        margin: 0 auto;
        left: calc(50% - (580/750 *100%)/2);
        top: 250px;
        position: fixed;
        background:rgba(255,255,255,1);
        border-radius:10px;
        // padding: 10.5px;
        z-index: 105;
        .close{
          img{
            width: 20px;
            height: 20px;
            float: right;
          }
        }
        .text{
          font-size: 18px;
          color: #333;
          text-align: center;
          line-height: 30px;
          padding: 0 20px;
          margin-top: 14px;
        }
        .btn{
          width:480/750 *100%;
          height:39px;
          line-height:39px;
          text-align: center;
          border:1px solid rgba(230,4,44,1);
          border-radius:40px;
          margin: 0 auto;
          margin-top: 18px;
          margin-bottom: 20px;
          a{
            color: #EA2F50;
            font-size: 15px;
            text-decoration: none;
            vertical-align: bottom;
          }
        }
      }
</style>
