<template>
  <div class="page-wrapper">

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <nav-lean></nav-lean>
  </div>
</template>

<script type="text/ecmascript-6">
import vheader from 'base/vheader/vheader'
import vfooter from 'base/vfooter/vfooter'
import page1 from 'components/page1/page1'
import navLean from 'components/nav/navLean'

export default {
  components: {
    vheader, vfooter, page1, navLean
  }
}
</script>
<style scoped>

</style>
