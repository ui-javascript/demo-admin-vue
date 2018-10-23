<template>
  <div>
    <app-header></app-header>
    <scroller lock-x scrollbar-y>
      <swipeout>
        <swipeout-item v-for="one in msg" :key="one.id" v-show="one.ok" transition-mode="follow">
          <div slot="right-menu">
            <swipeout-button>标记为未读</swipeout-button>
            <swipeout-button @click.native="onDelBtnClick(one.id)" type="warn">删除</swipeout-button>
          </div>
          <div slot="content" class="demo-content vux-1px-t">
            <img slot="icon" width="60" src="https://avatars0.githubusercontent.com/u/16240829?v=3&s=460">
            <span>消息 {{one.id}}</span>
          </div>
        </swipeout-item>
      </swipeout>
    </scroller>
  </div>
</template>

<script>
  import AppHeader from '../components/Header'
  import {Scroller, Swipeout, SwipeoutItem, SwipeoutButton} from 'vux'

  export default {
    components: {
      Swipeout,
      SwipeoutItem,
      SwipeoutButton,
      AppHeader,
      Scroller
    },

    methods: {
      onDelBtnClick(one) {
        this.msg[one].ok = false
      }
    },

    data() {
      return {
        msg: [{
          id: 0,
          ok: true
        }, {
          id: 1,
          ok: true
        }, {
          id: 2,
          ok: true
        }]
      }
    }
  }
</script>

<style>
  .demo-content {
    padding: 10px 10px;
  }
</style>
