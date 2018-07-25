<template>
    <div class="ruleDetails">
        <div>
            <header-back></header-back>

            <card-attention
                    :badge="badge"
                    :title="title"
                    :content="content"
            ></card-attention>

        </div>

        <footer-pure></footer-pure>
    </div>

</template>

<script>
    import headerBack from '../snippets/header-back'
    import cardAttention from '../snippets/card-attention'
    import footerPure from '../snippets/footer-pure'

    export default {

        components: {
            headerBack,
            cardAttention,
            footerPure
        },

        data() {
            return {
                badge: '',
                title: '',
                content: '',
                details: '122123123',
                badgeList: {
                    'seconds': '争分夺秒',
                    'higher': '一比高下',
                    'narrow': '狭路相逢'
                },
                titleList: {
                    'seconds': '争分夺秒',
                    'higher': '一比高下',
                    'narrow': '狭路相逢'
                },
                contentList: {
                    'seconds': '（1）比赛规则：共25道必答题，分五组进行，每组5题，每题2分，共50分，答对加分，答错不扣分；\n' +
                    '（2）比赛过程：屏幕一并显示试题，题目类型为单选题和判断题，主持人宣布开始，答题时间每组共120秒，时间到，自动提交。大屏幕显示每题的统计情况和个人的得分情况。',
                    'higher': '（1）比赛规则：实行淘汰制，共10道题，每题2分，答对加分并进入下一轮答题，答错不扣分则无法进入下一轮答题。\n' +
                    '（2）比赛过程：主持人每题开始前宣布参与人数，屏幕逐题显示，题目类型为单选题和判断题，每题30秒，时间到，自动提交。答对进入下一轮答题，答错则不能进入下一轮答题。大屏幕显示每题的统计情况和个人的得分情况。\n' +
                    '（3）专家根据答题情况进行点评。',
                    'narrow': '（1）比赛规则：共10道风险题，每题3分，答对加3分，答错扣3分。\n' +
                    '（2）比赛过程：逐题进行，首先给选手10秒时间选择是否参与，如果参与，屏幕显示题目，题型以多选题为主，主持人宣读题目并宣布开始，答题时间30秒，时间到，自动提交，答对加分，不答或答错扣分。选择不参与，不显示题目，不加分也不扣分。大屏幕显示每题的统计情况和个人的得分情况。\n' +
                    '（3）专家根据答题情况进行点评。'
                }
            }
        },
        methods: {
            ready() {
                // 类型
                let type = this.$route.query.type

                this.badge = this.badgeList[type]
                this.title = this.titleList[type]
                this.content = this.contentList[type]
            },
        },
        mounted() {
            this.ready()
        }
    }
</script>

<style lang="less">
    .ruleDetails {



    }
</style>