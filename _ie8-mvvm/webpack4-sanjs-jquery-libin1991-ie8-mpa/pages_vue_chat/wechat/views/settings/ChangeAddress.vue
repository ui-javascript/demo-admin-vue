<template>
  <div class="personinfo">
    <x-header :left-options="{backText: ''}">
      <p>修改地址</p>
      <x-button mini slot="right" type="primary" style="margin-top: -4px;">保存</x-button>
    </x-header>
    <group>
      <x-input title="收货人" placeholder="姓名" v-model="name"></x-input>
      <x-input title="手机号码" placeholder="11位手机号" v-model="mobile"></x-input>
      <x-input title="地区信息" placeholder="地区信息" v-model="area"></x-input>
      <x-input title="详细地址" placeholder="街道门牌信息" v-model="address"></x-input>
      <x-input title="邮政编码" placeholder="邮政编码" v-model="postalcode"></x-input>
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
        name: '骆金参',
        mobile: '17816869505',
        postalcode: '315612',
        area: '浙江 杭州市',
        address: '余杭区海曙路58号仓前街道'
      }
    },

    created() {

    },

    methods: {}
  }
</script>
