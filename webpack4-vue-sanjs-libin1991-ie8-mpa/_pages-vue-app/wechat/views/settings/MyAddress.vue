<template>
  <div class="personinfo">
    <x-header :left-options="{backText: ''}">
      <p>我的地址</p>
      <!--<x-button mini slot="right" type="primary" style="margin-top: -4px;">保存</x-button>-->
      <a slot="right" href="/#/settings/addaddress">
        <img width="20" src="../../assets/images/settings/plus.png">
      </a>
    </x-header>
    <group>
      <cell
        :link="{path: '/settings/changeAddress'}"
        :title="'骆金参, 17816869505'"
        inline-desc='浙江省 杭州市 余杭区 海曙路58号杭师大仓前街道'>
        <p></p>
      </cell>
    </group>
  </div>
</template>

<style>

</style>

<script>
  import {XInput, XHeader, Group, Cell, XButton} from 'vux'

  export default {
    name: 'PersonInfo',
    components: {
      Group,
      Cell,
      XHeader,
      XButton,
      XInput
    },

    data() {
      return {
        name: null,
        mobile: null,
        postalcode: null,
        area: null,
        address: null
      }
    },

    created() {

    },

    methods: {}
  }
</script>
