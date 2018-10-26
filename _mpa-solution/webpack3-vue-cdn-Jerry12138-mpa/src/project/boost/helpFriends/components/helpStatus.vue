<template>
<div>
  <div>
    <asistMember :avatarList="basicInfo.helpOtherList" :need="basicInfo.needFriendsNumber" :status="status"></asistMember>
    <countDown :endTime="basicInfo.endTime" v-if="status==='notHelpHe'"></countDown>
  </div>
  <div v-if="status==='notHelpHe'">
    <p class="m-t" @click="helpHe">
      <!-- <customBtn :opts="btn[status]" v-tap="{methods:helpHe}"></customBtn> -->
      <customBtn :opts="btn[status]" ></customBtn>
    </p>
  </div>
  <div v-if="status==='hasHelpHe'">
			<p class="m-t">
        <a href="inviteFriends.html" class="no-style-a" style="text-decoration: none;">
				  <customBtn :opts="btn[status].meTo"></customBtn>
        </a>
			</p>
			<p class="m-t" >
        <a href="index.html" class="no-style-a" style="text-decoration: none;">
				  <customBtn :opts="btn[status].seeOther" ></customBtn>
        </a>
			</p>
		</div>
</div>
</template>

<script>
import util from '@/common/js/utils.js'
import { getHelpOtherList, help } from '@/common/js/api.js'
import selfData from '../data.js'
import popup from '@/components/popup'
export default {
  name: 'helpStatus',
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
      btn: selfData.btn
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const store = JSON.parse(util.getStore())
      // 避免高频刷新增加服务器压力
      if (store && (new Date() - new Date(store.getTime)) < 5000) {
        this.basicInfo = store
      } else {
        this.basicInfo = await getHelpOtherList()
        this.basicInfo.getTime = new Date()
      }

      util.setStore(this.basicInfo)
      this.computedStatus()
    },
    async helpHe() {
      const helpHeStatus = await help()
      if (helpHeStatus) {
        this.basicInfo.helpOtherList.push(this.basicInfo.userInfo)
        this.$set(this.basicInfo, 'helpOtherList', this.basicInfo.helpOtherList)
        this.status = 'hasHelpHe'
      }
    },
    computedStatus() {
      if (new Date() > new Date(this.basicInfo.endTime)) {
        this.status =
          this.basicInfo.helpMeList.length !== 0
            ? 'hasPeopleAndEnd'
            : 'noPeopleAndEnd'
      } else {
        const isHelped = this.basicInfo.helpOtherList.some(item => {
          return item.id === this.basicInfo.userInfo.id
        })
        this.status = isHelped ? 'hasHelpHe' : 'notHelpHe'
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
