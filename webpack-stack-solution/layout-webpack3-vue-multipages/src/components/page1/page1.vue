<template>
  <div>
    我是页面page1</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['page1Getter'])
  },
  methods: {
    ...mapActions(['execRootAction'])
  },
  mounted() {
    console.log(this.page1Getter)
    this.execRootAction('Hello')
    console.log(this.page1Getter)
  }
}
</script>
<style lang="stylus" scoped>
</style>
