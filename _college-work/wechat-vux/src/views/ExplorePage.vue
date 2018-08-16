<template>
  <div>
    <app-header></app-header>
    <tab>
      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
      <tab-item @on-item-click="onItemClick">未发货</tab-item>
      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
    </tab>
    <news-list></news-list>
  </div>
</template>

<script>
  import AppHeader from '@/components/Header'
  import NewsList from '../components/NewsList'
  import {Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem} from 'vux'

  const list = () => ['精选', '美食', '电影', '酒店', '外卖']
  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      NewsList,
      AppHeader
    },
    data() {
      return {
        list2: list(),
        demo2: '美食',
        list3: ['收到的消息', '发出的消息'],
        demo3: '收到的消息',
        list4: ['正在放映', '即将上映'],
        demo4: '即将上映',
        demoDisabled: 'A',
        index: 0,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    methods: {
      onItemClick(index) {
        console.log('on item click:', index)
      },
      addTab() {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab() {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next() {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev() {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';

  .box {
    padding: 15px;
  }

  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }

  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }

  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }

  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
</style>
