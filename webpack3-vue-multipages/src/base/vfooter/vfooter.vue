<template>
  <div class="footer">
    {{text}}
  </div>
</template>
<script>
export default {
  name: 'vfooter',
  data() {
    return {
      text: '我是底部'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .footer
    color:#fff
    background:#000
</style>
