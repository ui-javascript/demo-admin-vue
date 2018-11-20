<template>
  <div class="settings">
    <app-header></app-header>

    <group>
      <cell :link="{path: '/settings/personinfo'}">
        <img slot="icon" width="60" src="https://avatars0.githubusercontent.com/u/16240829?v=3&s=460">
        <p>luo-JS</p>
        <p><span>微信号:&nbsp;&nbsp;</span><span>ljc123456</span></p>
      </cell>
    </group>

    <group>
      <cell title="钱包">
        <img slot="icon" width="15" src="../assets/images/settings/wallet.png">
      </cell>
    </group>

    <group>
      <cell title="收藏">
        <img slot="icon" width="15" src="../assets/images/settings/favorites.png">
      </cell>
      <cell title="相册">
        <img slot="icon" width="15" src="../assets/images/settings/album.png">
      </cell>
      <cell title="卡包">
        <img slot="icon" width="15" src="../assets/images/settings/card.png">
      </cell>
      <cell title="表情">
        <img slot="icon" width="15" src="../assets/images/settings/expression.png">
      </cell>
    </group>

    <group>
      <cell title="设置">
        <img slot="icon" width="15" src="../assets/images/settings/settings.png">
      </cell>
    </group>
  </div>
</template>

<style>
  .settings img {
    padding-right: 10px;
  }

</style>

<script>
  import AppHeader from '../components/Header'
  import {Group, Cell, Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'MySettings',
    components: {
      Group,
      Cell,
      Flexbox,
      FlexboxItem,
      AppHeader
    },
    data() {
      return {
        ok: false
      }
    }
  }
</script>
