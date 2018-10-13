<template>
  <div>
    <!--<group>-->
    <tabbar v-show="ok" style="background-color:#FFFFFF;">
      <tabbar-item :link="{path:'/'}" selected>
        <img slot="icon" src="../assets/images/footer/message.png">
        <img slot="icon-active" src="../assets/images/footer/message-active.png">
        <span slot="label">微信</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/contacts'}">
        <img slot="icon" src="../assets/images/footer/contact.png">
        <img slot="icon-active" src="../assets/images/footer/contact-active.png">
        <span slot="label">通讯录</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/explore'}">
        <img slot="icon" src="../assets/images/footer/find.png">
        <img slot="icon-active" src="../assets/images/footer/find-active.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/settings'}">
        <img slot="icon" src="../assets/images/footer/setting.png">
        <img slot="icon-active" src="../assets/images/footer/setting-active.png">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
    <!--</group>-->
  </div>
</template>

<style lang="less">
  // @import '../assets/css/iconfont.css';
</style>

<script>
  import {Group, Tabbar, TabbarItem} from 'vux'

  export default {
    name: 'AppFooter',
    components: {
      Tabbar,
      TabbarItem,
      Group
    },
    data() {
      return {
        index: 0,
        ok: true
      }
    },
    methods: {
      onclick1() {
        console.log(1)
      }
    }

  }

</script>
