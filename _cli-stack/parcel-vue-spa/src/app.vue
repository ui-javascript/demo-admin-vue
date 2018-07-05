<template lang="pug">
  h1 parcel vue
</template>

<script>
// parcel-plugin-vue 暂未解决 style 引入样式 HMR 无效的问题，故先在此加载（此处有效）
import './style.styl'

export default {
	name: 'App'
}
</script>
