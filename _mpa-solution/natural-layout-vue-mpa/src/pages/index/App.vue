<template>
  <div class="page-wrapper">
    <vheader></vheader>

    <router-link to="/hello">点我点我点我啊</router-link>

    <div>
      <a href="/page1.html">跳转到page1</a>
    </div>

    <transition name="slide">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <vfooter></vfooter>
  </div>
</template>

<script type="text/ecmascript-6">
import vheader from 'base/vheader/vheader'
import vfooter from 'base/vfooter/vfooter'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['moduleIndexGetter', 'indexGetter'])
  },
  mounted() {
    console.log(this.moduleIndexGetter, this.indexGetter)
  },
  components: {
    vheader,
    vfooter
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
.slide-enter-active, .slide-leave-active
  transition 0.2s all

</style>
