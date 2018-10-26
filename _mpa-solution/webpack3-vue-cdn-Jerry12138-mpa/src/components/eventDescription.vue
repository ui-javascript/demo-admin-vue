<template>
  <div class="event-rules">
    <p class="rules-text text-center">
      <span class="circle"></span>
      <span class="text color333 f16">活动规则</span>
      <span class="circle"></span>
    </p>
    <div class="detail">
      <p v-for="(item,index) in rules.detail" :key="index" class="" v-html="adjustDetail(item,index)">
      </p>
      <div class="border">
        <span class="break break1 transverse"></span>
        <span class="break break2 transverse"></span>
        <span class="break break3 transverse"></span>
        <span class="break break4 transverse"></span>
        <span class="break break5 transverse"></span>
        <span class="break break6 vertical"></span>
        <span class="break break7 vertical"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'eventDescription',
    props: {
      rules: {
        type: Object,
        default() {
          return {
            detail: [], weight: []
          }
        }
      }
    },
    mounted() {
      console.log(this.rules)
    },
    methods: {
      adjustDetail(item, index) {
        const str = index + 1
        item = item.replace(this.rules.weight, v => `<span style="background:#cdeaee">${v}</span>`)
        return str + '、' + item
      }
    }
  
  }
</script>

<style lang="less" scoped>
  .event-rules{
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 0 10px;
    .detail{
      margin-left: 11px;
      margin-top: 26.5px;
      background-color: #9bd4dc;
      border-radius: 7.5px;
      padding: 7px 25px 28px 16.5px;
      position: relative;
      .border{
        .break{
          position: absolute;
          display: inline-block;
          width: 3px;
          height: 3px;
          background-color: #9bd4dc;
        }
        .vertical{
          right: -2px;
        }
        .break1{top:-2px;width: 25px;left: 72px;background-color: #fff;}
        .break2{top:-2px;width: 15px;left: 180px;background-color: #fff;}
        .break3{bottom: -2px;width: 7px;left: 94px;}
        .break4{bottom:-2px;width: 15px;left: 222px;}
        .break5{bottom:-2px;width: 7px;right: 67px;}
        .break6{top:30px;height: 15px;}
        .break7{top: 131px;height: 21px;}
        position: absolute;
        width: 99%;
        height: 100%;
        border: 1.5px solid rgba(5,0,1,1);
        top: -14.5px;
        left: -11px;
        border-radius: 7.5px;
      }
      p{
        font-size: 12px;
        color: #050001;
        line-height: 18px;
        .weight{
          display: inline-block;  
          background-color: #fff
        }
      }
    }
  }
  .f12{
    font-size: 12px;
  }
  .rules-text{
    
    .circle{
      display: inline-block;
      border-radius: 50%;
      width: 6px;
      vertical-align: middle;
      height: 6px;
      background-color: #E86403;
    }
    .text{
      margin: 0 3.5px;
    }
  }

</style>
