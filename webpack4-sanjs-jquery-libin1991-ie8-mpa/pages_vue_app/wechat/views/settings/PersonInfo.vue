<template>
  <div class="personinfo">
    <x-header :left-options="{backText: ''}"><span>个人信息</span></x-header>

    <group>
      <cell title="头像">
        <img class="avator" width="60" src="https://avatars0.githubusercontent.com/u/16240829?v=3&s=460">
      </cell>
      <cell title="昵称" :link="{path: '/settings/changenickname'}">
        <p>luo-JS</p>
      </cell>
      <cell title="微信号">
        <p>ljc123456</p>
      </cell>
      <cell title="二维码名片">
        <img class="avator" width="20" src="../../assets/images/settings/qr.png">
      </cell>
      <cell title="我的地址" :link="{path: '/settings/myaddress'}">
        <p></p>
      </cell>
    </group>

    <group>
      <cell title="性别" @click.native="toggleGender()">
        <!--<x-switch :title="showGenderTxt()" v-model="show"></x-switch>-->
        <p>{{ genderTxt }}</p>
      </cell>
      <cell title="地区" :link="{path: '/settings/changearea'}">
        <p>浙江&nbsp;&nbsp;杭州</p>
      </cell>
      <cell title="个性签名">
        <p>未填写</p>
      </cell>
    </group>

    <group>
      <cell title="LinkedIn账号">
        <p>展示</p>
      </cell>
    </group>

    <div v-transfer-dom>
      <!--<confirm v-model="show">
        <group>
          <radio :options="radio001" @on-change="change"></radio>
        </group>
      </confirm>-->
      <alert v-model="show">
        <group>
          <radio :options="radio001" @on-change="change"></radio>
        </group>
      </alert>
    </div>

  </div>
</template>

<style>

</style>

<script>
  import {
    Alert,
    Radio,
    Confirm,
    XSwitch,
    XHeader,
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    TransferDomDirective as TransferDom
  } from 'vux'

  export default {
    name: 'PersonInfo',

    directives: {
      TransferDom
    },

    components: {
      Group,
      Cell,
      Flexbox,
      FlexboxItem,
      XHeader,
      Confirm,
      XSwitch,
      Radio,
      Alert
    },

    data() {
      return {
        show: false,
        genderTxt: '男',
        radio001: ['男', '女'],
        radio001Value: '男',
        radio002Value: '女'
      }
    },

    created() {
      // console.log(this.props)
    },

    methods: {
      onCancel() {
        // console.log('on cancel')
      },
      onConfirm(value) {
      },
      onHide() {
        // console.log('on hide')
      },
      onShow() {
        // console.log('on show')
      },
      change(value) {
        this.genderTxt = value
        this.show = false
      },
      toggleGender() {
        // if (this.show) {
        //   this.show = false
        //   this.genderTxt = '男'
        // }
        // else if (this.show === false) {
        //   this.show = true
        //   this.genderTxt = '女'
        // }
        this.show = true
        // this.genderTxt = '女'
      }
    }
  }
</script>
