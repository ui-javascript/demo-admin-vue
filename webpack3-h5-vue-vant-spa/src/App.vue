<template>
  <div id="app">
    <router-view keep-alive></router-view>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" url="/#/exam">考试中心</van-tabbar-item>
      <van-tabbar-item icon="records" url="/#/history">历史成绩</van-tabbar-item>
      <van-tabbar-item icon="chat" dot url="/#/userInfo">个人信息</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      }
    },
    methods: {

    }
  }
</script>

<style>

</style>
