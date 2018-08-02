<template>
    <div class="ruleIndex relative">

        <user-exit></user-exit>

        <div class="ruleIndex__info tc">
            <span class="ruleIndex__info_label">姓名: </span>
            <span class="ruleIndex__info_content">{{ username }}</span>
            <span v-show="module!==0">
                <span class="ruleIndex__info_label">得分: </span>
                <span class="ruleIndex__info_content">{{ totalScores }} 分</span>
            </span>
        </div>

        <img class="ruleIndex__bg" src="../../assets/images/index.jpg" alt="">

        <div class="ruleIndex__box">
            <div class="ruleIndex__box_btn center" @click="viewRule('seconds')">争分夺秒 <span v-show="module!==0"> {{typeScores1}} 分</span>
            </div>
            <div class="ruleIndex__box_btn center" @click="viewRule('higher')">一比高下 <span v-show="module!==0"> {{typeScores2}} 分</span>
            </div>
            <div class="ruleIndex__box_btn center" @click="viewRule('narrow')">狭路相逢 <span v-show="module!==0"> {{typeScores3}} 分</span>
            </div>
            <div v-if="rankingVisible" class="ruleIndex__box_ranking center"></div>
        </div>

        <footer-mask></footer-mask>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import userExit from '../snippets/user-exit'
    import footerMask from '../snippets/footer-mask'

    export default {
        components: {
            userExit,
            footerMask
        },
        data() {
            return {
                username: '吴彦祖',
                rankingVisible: false,
                module: 0,
                totalScores: 0,
                typeScores1: 0,
                typeScores2: 0,
                typeScores3: 0
            }
        },
        computed: {
            ...mapGetters({
                progress: 'progress'
            })
        },
        methods: {
            // 查看规则
            viewRule(type) {
                this.$router.push({
                    path: '/rule/details',
                    query: {
                        type: type
                    }
                })
            },

        },
        mounted() {
            this.module = this.progress.module

            // this.initProgress()
        }
    }
</script>

<style lang="less">
    .ruleIndex {

        &__bg {
            width: 100%;

        }

        &__box {
            position: absolute;
            text-align: center;
            /*top: 320px;*/
            top: 0;
            width: 100%;
            margin-top: 80%;

            &_btn {
                width: 660 / 3px;
                height: 230 / 3px;
                line-height: 180px / 3px;
                background: url(../../assets/images/badge.png) 100% 100%;
                background-size: cover;
                vertical-align: middle;
                font-size: 26px;
                color: blue;
                font-weight: bold;
            }
        }

        &__info {
            width: 100%;
            position: absolute;
            top: 0px;
            font-size: 20px;
            text-align: center;

            margin-top: 30%;

            &_label {
                color: white;
            }

            &_content {
                color: yellow;
            }
        }
    }

    /* iphone5等小屏幕 */
    @media screen
    and (max-device-width: 350px) {
        .ruleIndex {
            &__info {
                /*top: 95px;*/
            }

            &__box {
                /*top: 250px;*/
            }
        }
    }

</style>