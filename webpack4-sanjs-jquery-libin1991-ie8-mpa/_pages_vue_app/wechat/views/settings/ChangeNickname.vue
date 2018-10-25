<template>
  <div class="personinfo">
    <x-header :left-options="{backText: ''}">
      <p>更改名字</p>
      <x-button mini slot="right" type="primary" style="margin-top: -4px;">保存</x-button>
    </x-header>
    <group>
      <x-input title="名字" placeholder="请填写名字" v-model="nickname"></x-input>
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
        nickname: 'luojs'
      }
    },

    created() {

    },

    methods: {}
  }
</script>
