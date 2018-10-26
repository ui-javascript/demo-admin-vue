<template>
  <div class="avatar-list text-center m-t-lg" v-if="avatarList.length!==0">
		<p class="text color333">
			<span class="line"></span>
			{{topText}}
			<span class="line"></span>
		</p>
		<div style="margin-top:15px">
			<img :src="item.avatar" alt="" v-for="(item,index) in avatarList" :key="item.id" v-if="index<=need">
			<span class="empty-avatar">?</span>
		</div>
		<p class="boost-tip color333" v-html="boostTip"></p>
  </div>
</template>

<script>
  export default {
    name: 'asistMember',
    props: {
			// 助力头像列表
      avatarList: {
        type: Array,
        default() {
          return []
        }
      },
		// 需要几人
      need: {
        type: Number,
        default: 5
      },
		// 助力状态
		// hasPeopleAndEnd:有好友助力，但是未完成
		// noPeopleAndEnd:没有好友助力并且结束
		// noPeopleAndStart:没有好友助力等待好友助力
		// success:成功了
		// hasPeopleButNotSuccess:有朋友助力但是没有成功
		// hasHelpHe:已助力
		// notHelpHe:未助力
      status: {
        type: String,
        default: 'hasPeopleButNotSuccess'
      }
    },
    computed: {
      topText() {
        console.log(this.status)
        return /hasPeopleAndEnd|noPeopleAndEnd/.test(this.status) ? '感谢这些好友的帮助！' : '好棒！以下好友帮忙助力成功啦~'
      },
      boostTip() {
        const tipObj = {
          hasPeopleButNotSuccess: `还差<span style="color:#EC294C;margin: 0 4px;">${this.need - this.avatarList.length}</span>人助力免费领取`,
          notHelpHe: `还差<span style="color:#EC294C;margin: 0 4px;">${this.need - this.avatarList.length}</span>人助力免费领取`,
          success: `恭喜你，助力成功`,
          hasPeopleAndEnd: `好可惜，差一点就助力成功了`,
          hasHelpHe: `<span style="color:#EC294C">已助力<span>`
        }
        return tipObj[this.status]
      }
    }
}
</script>

<style lang="less" scoped>
	.avatar-list{
		.text{
			font-size: 12px;
			.line{
				border-top: 1px solid #e0e0e0;
				vertical-align: middle;
				margin: 0 7.5px;
				width: 15px;
				display: inline-block; 
				top: -1px;
    		position: relative;
			}
		}
		img,.empty-avatar{
			width: 40px;
			height: 40px;
			margin: 0 10px;
			border-radius: 50%
		}
		.empty-avatar{
			font-size: 18px;
			border: 1px dotted rgba(181,181,181,1);
			display: inline-block;
			width: 38px;
			height: 38px;
			text-align: center;
			line-height:38px; 
			color: #888;
		}
	}
	.boost-tip{
		font-size: 18px;
		margin-top: 15px;
	}
</style>
