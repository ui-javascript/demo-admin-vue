<template>
    <div class="ruleIndex relative">

        <img class="ruleIndex__bg" src="../../assets/images/index.jpg" alt="">

        <div class="ruleIndex__box">
            <div class="ruleIndex__box_btn center" @click="viewRule('seconds')">争分夺秒</div>
            <div class="ruleIndex__box_btn center" @click="viewRule('higher')">一比高下</div>
            <div class="ruleIndex__box_btn center" @click="viewRule('narrow')">狭路相逢</div>
        </div>

    </div>
</template>

<script>
    export default {

        data() {
            return {

            }
        },
        methods: {
            ready() {

            },
            // 查看规则
            viewRule(type) {
                this.$router.push({
                    name: 'index_rule',
                    params: {
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

<style lang="less" scoped>
    .ruleIndex {

        &__bg {
            width: 100%;

        }

        &__box {
            position: absolute;
            text-align: center;
            top: 430px;
            width: 100%;

            &_btn {
                width: 660 / 2px;
                height: 230 / 2px;
                line-height: 180px / 2px;
                background: url(../../assets/images/badge.png) 100% 100%;
                background-size: cover;
                vertical-align: middle;
            }
        }
    }

</style>