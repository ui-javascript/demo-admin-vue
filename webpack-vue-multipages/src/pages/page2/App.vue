<template>
  <div class="page-wrapper">
    <vheader></vheader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <vfooter></vfooter>
  </div>
</template>

<script type="text/ecmascript-6">
import vheader from 'base/vheader/vheader'
import vfooter from 'base/vfooter/vfooter'
import page2 from 'components/page2/page2'

export default {
  components: {
    vheader, vfooter, page2
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>
