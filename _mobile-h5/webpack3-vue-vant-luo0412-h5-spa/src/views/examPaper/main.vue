<template>
  <div>

    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-tabs>
      <van-tab v-for="index in 8" :title="'题目 ' + index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 2,
        activeKey: 0
      }
    },
    methods: {
      onClickLeft() {
        this.$toast('返回');
      },
      onClickRight() {
        this.$toast('按钮');
      },
      onClick(key) {
        this.activeKey = key;
      }
    }
  };
</script>

<style>
  body {
    background-color: #f8f8f8;
  }

  .van-cell__title .van-icon {
    font-size: 18px;
  }
</style>
