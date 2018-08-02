<template>
    <div class="ruleIndex">
        <!--<common-header></common-header>-->
        <div class="container center clearfix">
            <card-attention
                    class="fl"
                    :title="titleList[type]">
                <el-button type="primary" @click="startAnswer()">开始答题</el-button>
            </card-attention>

            <div class="ruleIndex__box fr box-dashed" v-html="ruleList[type]"></div>
        </div>
    </div>
</template>

<script>
    import CommonHeader from '../common/header'
    import CardAttention from '../common/snippets/card-attention'
    import {pushType1, pushType2, pushType3} from '../../service/push'

    export default {
        name: "index",
        data() {
            return {
                type: '',
                titleList: {
                    seconds: '争分夺秒',
                    higher: '一比高下',
                    narrow: '狭路相逢'
                },
                ruleList: {
                    seconds: '<p>争分夺秒：必答题</p>' +
                    '<p>（1）比赛规则：共25道必答题，分五组进行，每组5题，每题2分，共50分，答对加分，答错不扣分；</p>' +
                    '<p>（2）比赛过程：屏幕一并显示试题，题目类型为单选题和判断题，主持人宣布开始，答题时间每组共120秒，时间到，自动提交。大屏幕显示每题的统计情况和个人的得分情况。</p>',
                    higher: '一比高下：冲顶题\n' +
                    '（1）比赛规则：实行淘汰制，共10道题，每题2分，答对加分并进入下一轮答题，答错不扣分则无法进入下一轮答题。\n' +
                    '（2）比赛过程：主持人每题开始前宣布参与人数，屏幕逐题显示，题目类型为单选题和判断题，每题30秒，时间到，自动提交。答对进入下一轮答题，答错则不能进入下一轮答题。大屏幕显示每题的统计情况和个人的得分情况。\n' +
                    '（3）专家根据答题情况进行点评。',
                    narrow: '狭路相逢：风险题\n' +
                    '（1）比赛规则：共10道风险题，每题3分，答对加3分，答错扣3分。\n' +
                    '（2）比赛过程：逐题进行，首先给选手10秒时间选择是否参与，如果参与，屏幕显示题目，题型以多选题为主，主持人宣读题目并宣布开始，答题时间30秒，时间到，自动提交，答对加分，不答或答错扣分。选择不参与，不显示题目，不加分也不扣分。大屏幕显示每题的统计情况和个人的得分情况。\n' +
                    '（3）专家根据答题情况进行点评。'
                },
            }
        },
        components: {
            CommonHeader,
            CardAttention
        },
        methods: {
            startAnswer() {

                let type = this.type
                if (type === 'seconds') {
                    this.$store.dispatch('UpdateProgress', {
                        module: 1,
                        group: 1,
                        problem: 1
                    })

                    pushType1({
                        subType: 1
                    }).then().catch()
                }
                else if (type === 'higher') {
                    this.$store.dispatch('UpdateProgress', {
                        module: 2,
                        group: 1,
                        problem: 1
                    })

                    pushType2({
                        questionNumber: 1
                    }).then().catch()
                }
                else if (type === 'narrow') {
                    this.$store.dispatch('UpdateProgress', {
                        module: 3,
                        group: 1,
                        problem: 1
                    })

                    pushType3({
                        questionNumber: 1
                    }).then().catch()
                }

                this.$router.push({
                    name: `${this.type}_question`
                })
            }
        },
        watch: {
            // 路由变化的时候刷新
            '$route'(to, from) {
                debugger
                this.type = this.$route.query.type || 'seconds';
                // this.updateList()
            }
        },
        // beforeRouteUpdate() {
        //     this.type = this.$route.query.type || 'seconds';
        // },
        mounted() {
            this.type = this.$route.query.type || 'seconds';
        },
    }
</script>

<style lang="less">
    .ruleIndex {
        width: 100%;

        .container {
            margin-top: 100px;
            width: 1600px;
        }

        &__box {
            width: 837px;
            height: 357px;
        }
    }
</style>