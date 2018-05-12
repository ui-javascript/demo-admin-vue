<template>
  <div class="header">
    {{text}}
  </div>
</template>
<script>
export default {
  name: 'vheader',
  data() {
    return {
      text: '我是头部'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    color:#fff
    background:#c01
</style>
