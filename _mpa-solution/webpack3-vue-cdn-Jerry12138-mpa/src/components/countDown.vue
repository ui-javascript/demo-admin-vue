<template>
  <div class="count-down m-t-lg">
		<p class="text text-center">
			距助力结束还有
		</p>
		<div class="time text-center">
			<span class="num">{{end[0] || '00'}}</span>
			<span class="spacer">:</span>
			<span class="num">{{end[1] || '00'}}</span>
			<span class="spacer">:</span>
			<span class="num">{{end[2] || '00'}}</span>
		</div>
  </div>
</template>

<script>
export default {
  name: 'countDown',
  props: ['endTime'],
  data() {
    return {
      end: ''
    }
  },
  mounted() {
    this.countDown()
  },
  methods: {
    formatSeconds(value) {
      var secondTime = parseInt(value) / 1000 // 秒
      var minuteTime = 0 // 分
      var hourTime = 0 // 小时
      if (secondTime > 60) {
        // 如果秒数大于60，将秒数转换成整数
        // 获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60)
        // 获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60)
        // 如果分钟大于60，将分钟转换成小时
        if (minuteTime > 60) {
          // 获取小时，获取分钟除以60，得到整数小时
          hourTime = parseInt(minuteTime / 60)
          // 获取小时后取佘的分，获取分钟除以60取佘的分
          minuteTime = parseInt(minuteTime % 60)
        }
      }
			// let result = ''
			// if (hourTime < 24) {
			// 	result = '' + this.formatTime(secondTime) + '秒'
			// }

			// if (minuteTime > 0) {
			// 	result = '' + this.formatTime(minuteTime) + '分' + result
			// }
			// if (hourTime > 0) {
			// 	if (hourTime >= 24) {
			// 		result =
      //       '' +
      //       parseInt(hourTime / 24) +
      //       '天' +
      //       this.formatTime(hourTime % 24) +
      //       '小时' +
      //       result
			// 	} else {
			// 		result = '' + this.formatTime(hourTime) + '小时' + result
			// 	}
			// }
			// return result
      return [this.formatTime(hourTime), this.formatTime(minuteTime), this.formatTime(secondTime)]
    },
    formatTime(time) {
      return time < 10 ? '0' + time : time
    },
    countDown() {
      const endTime = new Date(this.endTime)
      var currentTime = new Date()
      if (endTime > currentTime) {
        setTimeout(() => {
          this.countDown()
        }, 1000)
        this.end = this.formatSeconds(endTime - currentTime)
      }
    }
  }
}
</script>

<style lang="less" scoped>
	.count-down{
		.text{
			color: #4C4C4C;
			font-size: 12px;
		}
		.time{
			span{
				display: inline-block;
			}
			.spacer{
				font-size: 10.5px;
				color: #4C4C4C;
			}
			.num{
				width: 23px;
				height: 22px;
				text-align: center;
				line-height: 24px;
				font-size: 13px;
				font-family:PingFangSC-Regular;
				font-weight:bold;
				color:#EC294C;
				border:1px solid rgba(236,41,76,1);
				border-radius:2.5px;
			}
		}
		
	}
</style>

