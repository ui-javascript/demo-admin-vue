<template>
  <div class="app" @touchmove.prevent>
    <img lowsrc="../../../common/images/index_banner.png" src="../../../common/images/index_banner@2x.png" class="w-full" alt="">
    <p class="get-tip f14 m-t-lg">您可以通过以下方式获得观看资格：</p>
    <p class="m-t-l">
      <customBtn href="inviteFriends.html">
        <img src="../../../common/images/free_get@2x.png"  alt="">
      </customBtn>
    </p>
    <p class="or f14 m-t-xs text-center color-red">或</p>
    <p class="m-t">
      <customBtn :opts="directBtnOpt"></customBtn>
    </p>
    <p class="small-circle text-center m-t">
      <img src="../../../common/images/small_circle.png" alt="">
    </p>
    <img class="w-full m-t-sm" lowsrc="../../../common/images/detail.png" src="../../../common/images/detail@2x.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      directBtnOpt: {
        height: 50,
        detail: [{
          text: '演出地点:成都',
          size: 12,
          color: '#EA274A',
          mt: 5
        }, {
          text: '购买现场票',
          size: 19,
          color: '#EA274A',
          mt: 4,
          bold: true
        }]
      }
    }
  },
  methods: {
  },
  mounted() {

  }
}
</script>

<style <style lang="less" scoped>
  .get-tip{
    margin-left: 9.5px;
  }
  .or{
    color: #E70830;
  }
</style>
