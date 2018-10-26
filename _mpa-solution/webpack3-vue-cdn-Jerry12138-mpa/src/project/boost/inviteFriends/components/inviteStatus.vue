<template>
  <div>
		<div>
			<asistMember :avatarList="basicInfo.helpMeList" :need="basicInfo.needFriendsNumber" :status="status" v-if="!/noPeopleAndEnd|noPeopleAndStart/.test(status)"></asistMember>
			<countDown :endTime="basicInfo.endTime" v-if="status==='hasPeopleButNotSuccess'"></countDown>
		</div>
		<div v-if="status==='hasPeopleAndEnd'">
			<p class="m-t">
				<customBtn :opts="btn[status]"></customBtn>
			</p>
		</div>
		<div v-if="status==='hasPeopleButNotSuccess'">
			<p class="m-t">
				<customBtn :opts="btn[status].continue"></customBtn>
			</p>
			<p class="m-t">
				<customBtn :opts="btn[status].direct"></customBtn>
			</p>
		</div>
		<div v-if="status==='noPeopleAndStart'">
			<p class="m-t-l text-center">
        <customBtn>
          <img src="@/common/images/invite_btn.png"  alt="">
        </customBtn>
    	</p>
    <p class="or f14 m-t-xs text-center color-red">或</p>
    <p class="m-t">
      <customBtn :opts="btn[status]"></customBtn>
    </p>
		</div>
    <div v-if="status==='noPeopleAndEnd'">
      <p class="direct-bug-tip f14 color333 m-t">您可以选择直接购买:</p>
      <p class="m-t-l text-center">
        <customBtn>
          <img src="@/common/images/invite_btn.png" @click="showNotPopup" alt="">
        </customBtn>
    	</p>
      <p class="or f14 m-t-xs text-center color-red">或</p>
      <p class="m-t">
        <customBtn :opts="btn['noPeopleAndStart']"></customBtn>
      </p>
      <popup :visible="popupVisible" @close="()=>popupVisible = false"></popup>
    </div>
  </div>
</template>

<script>
import util from '@/common/js/utils.js'
import { getActiveInfo } from '@/common/js/api.js'
import selfData from '../data.js'
import popup from '@/components/popup'
export default {
  name: 'inviteStatus',
  components: { popup },
  props: {
    propName: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      basicInfo: {},
      status: '',
      btn: selfData.btn,
      popupVisible: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      try {
        const store = JSON.parse(util.getStore('hopoActiveInfo'))
          // 避免高频刷新增加服务器压力
        if (store && (new Date() - new Date(store.getTime)) < 5000) {
          this.basicInfo = store
        } else {
          this.basicInfo = await getActiveInfo()
          this.basicInfo.getTime = new Date()
        }

        util.setStore(this.basicInfo, 'hopoActiveInfo')
        this.btn.noPeopleAndStart.detail[0].text = `${
            this.basicInfo.directBuyPrice
          } 元直接购买`
        this.computedStatus()
      } catch (error) {
        console.log(error)
      }
    },
    showNotPopup() {
      console.log('fd1', this.popupVisible)
      this.popupVisible = true
      console.log('fd', this.popupVisible)
    },
    // 助力状态
    // hasPeopleAndEnd:有好友助力，但是已结束
    // noPeopleAndEnd:没有好友助力并且结束
    // noPeopleAndStart:没有好友助力等待好友助力
    // success:成功了
    // hasPeopleButNotSuccess:有朋友助力但是没有成功
    computedStatus() {
      if (new Date() > new Date(this.basicInfo.endTime)) {
        this.status =
          this.basicInfo.helpMeList.length !== 0
            ? 'hasPeopleAndEnd'
            : 'noPeopleAndEnd'
      } else {
        if (this.basicInfo.helpMeList.length === 0) {
          this.status = 'noPeopleAndStart'
        } else {
          this.status =
            this.basicInfo.helpMeList.length ===
            this.basicInfo.needFriendsNumber
              ? 'success'
              : 'hasPeopleButNotSuccess'
        }
      }
    }
  }
}
</script>

<style scoped>
.direct-bug-tip{
  margin-left: 19px;
}
</style>
