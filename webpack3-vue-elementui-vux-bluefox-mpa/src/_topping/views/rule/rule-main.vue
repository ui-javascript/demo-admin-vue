<template>
    <div class="ruleIndex relative">

        <user-exit></user-exit>

        <div class="ruleIndex__info">
            <span class="ruleIndex__info_label">姓名: </span>
            <span class="ruleIndex__info_content">{{ username }}</span>
        </div>

        <img class="ruleIndex__bg" src="../../assets/images/index.jpg" alt="">

        <div class="ruleIndex__box">
            <div class="ruleIndex__box_btn center" @click="viewRule('seconds')">争分夺秒</div>
            <div class="ruleIndex__box_btn center" @click="viewRule('higher')">一比高下</div>
            <div class="ruleIndex__box_btn center" @click="viewRule('narrow')">狭路相逢</div>
        </div>

        <footer-mask></footer-mask>

    </div>
</template>

<script>
    import userExit from '../snippets/user-exit'
    import footerMask from '../snippets/footer-mask'

    export default {
        components: {
            userExit,
            footerMask
        },
        data() {
            return {
                username: '吴彦祖'
            }
        },
        methods: {
            ready() {

            },
            // 查看规则
            viewRule(type) {
                this.$router.push({
                    name: 'rule_details',
                    query: {
                        type: type
                    }
                })
            }
        },
        mounted() {
            this.ready()
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