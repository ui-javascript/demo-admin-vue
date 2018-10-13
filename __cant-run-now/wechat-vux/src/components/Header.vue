<template>
  <div>
    <x-header :left-options="{showBack: false}">{{tag}}</x-header>
  </div>
</template>
<style>
  /*.tabbar{
    height:50px;
    position:relative;
  }
  .search{
    position:absolute;right:5px;top:5px;z-index:999;
  }
  .title{
    text-align:center;
    margin:auto;
    color:white;
    line-height:50px;
    font-size:18px;
  }*/
</style>
<script>
  import {Tabbar, TabbarItem, XHeader} from 'vux'

  export default {
    name: 'AppHeader',
    data() {
      return {
        tag: '微信',
        showMenus: false
      }
    },
    components: {
      Tabbar,
      TabbarItem,
      XHeader
    },
    methods: {}
  }
</script>
