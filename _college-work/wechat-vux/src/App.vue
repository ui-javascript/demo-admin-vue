<template>
  <div id="app">
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>

  import AppFooter from './components/Footer'

  export default {
    name: 'app',
    components: {
      AppFooter
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style>
