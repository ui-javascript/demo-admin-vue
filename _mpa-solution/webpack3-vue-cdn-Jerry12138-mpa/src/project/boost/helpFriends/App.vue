<template>
  <div class="app" @touchmove.prevent>
    <!-- 邀请好友助力 -->
    <img lowsrc="@/common/images/index_banner.png" src="@/common/images/share.png" class="w-full" alt="">
    <helpStatus></helpStatus>
    <eventDescription :rules="selfData.activeRules"></eventDescription>
  </div>
</template>

<script>
  import selfData from './data.js'
  import helpStatus from './components/helpStatus.vue'
  export default {
    components: { helpStatus },
    data() {
      return {
        selfData
      }
    }
  }
</script>

<style></style>
