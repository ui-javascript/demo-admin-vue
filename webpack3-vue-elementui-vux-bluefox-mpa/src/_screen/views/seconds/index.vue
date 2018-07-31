<template>
    <div class="secondsIndex">
        <!--<common-header></common-header>-->

        <div class="container center">
            <!--<keep-alive>-->
                <router-view></router-view>
            <!--</keep-alive>-->
        </div>
    </div>
</template>

<script>
    import CommonHeader from '../common/header'
    import {mapGetters} from 'vuex'
    import {getOverview} from "../../service/screen"

    export default {
        name: "index",
        components: {
            CommonHeader
        },
        computed: {
            ...mapGetters({
                progress: 'progress',
                problemList: 'problemList'
            })
        },
        mounted() {
            // login('17816869505', '17816869505').then(res => {
            //     console.log(res)
            //     setToken(res.data)
            //     this.$router.push({
            //         name: 'welcome_index'
            //     })
            // }).catch()

            if (!this.problemList.length) {
                // 获取题目
                getOverview({
                    subType: this.progress.group
                }).then(res => {

                    // 全局更新
                    this.$store.dispatch('UpdateProblemList', res)
                })
            }
        }
    }
</script>

<style lang="less">
    .secondsIndex {
        width: 100%;

        // 注意 符号
        > .container {
            width: @screen-min-width;
        }
    }
</style>