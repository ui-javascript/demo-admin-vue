<template>
  <div class="personinfo">
    <x-header :left-options="{backText: ''}">
      <p>选择地区</p>
    </x-header>
    <group>
      <x-address :title="'地址'" @on-hide="logHide" v-model="value_0_1" :list="addressData" placeholder="请选择地址">
        <template slot="title" scope="props">
        <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
          <span style="vertical-align:middle;">地址</span>
        </span>
        </template>
      </x-address>
    </group>
  </div>
</template>

<style>

</style>

<script>
  import {XHeader, ChinaAddressV3Data, Group, Cell, XButton, XAddress} from 'vux'

  export default {
    name: 'PersonInfo',
    components: {
      Group,
      Cell,
      XHeader,
      XButton,
      XAddress
    },

    data() {
      return {
        value_0_1: [],
        value: [],
        addressData: ChinaAddressV3Data
      }
    },

    created() {

    },

    methods: {
      logHide(str) {
        console.log('on-hide', str)
      },
      logShow(str) {
        console.log('on-show')
      }
    }
  }
</script>
