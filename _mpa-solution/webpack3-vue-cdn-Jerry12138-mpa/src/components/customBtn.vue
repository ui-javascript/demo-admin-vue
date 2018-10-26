<template>
  <div class="btn-wrap w-full">
    <div class="text-center">
      <a :href="href" v-if="href">
        <slot class="img-btn"></slot>
      </a>
      <span v-else>
        <slot class="img-btn"></slot>
      </span>
    </div>
    <div class="btn" :style="btnStyle()" v-if="'detail' in opts">
      <p v-for="(item,index) in opts.detail" :key="index" :style="itemStyle(item)" class="text-center">
        {{item.text}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'customBtn',
    props: {
      opts: {
        type: Object,
        default() { return {} }
      },
      href: {
        type: String,
        default: ''
      }
    },
    methods: {
      itemStyle(item) {
        const style = {
          'font-size': (item.size || 21) + 'px',
          'color': item.color || '#DD392E',
          'font-weight': item.bold && 'bold'
        }
        if (this.opts.detail.length > 1) {
          style['line-height'] = (item.size || 21) + 'px'
          style['margin-top'] = (item.mt || 5) + 'px'
        }
        return style
      },
      btnStyle() {
        return {
          'height': (this.opts.height || 50) - 2 + 'px',
          'line-height': (this.opts.height || 50) - 2 + 'px',
          'border-radius': '25px',
          'background': this.opts.bgColor || '#fff',
          'border': `1px solid ${this.opts.borderColor || 'rgba(230,4,44,1)'}`
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .btn-wrap{
    .btn{
      width: 600/750 * 100%;
      margin: 0 auto;
    }
    img{
      width: 604/750 * 100%;
      height: 53px;
    }
  }
</style>
