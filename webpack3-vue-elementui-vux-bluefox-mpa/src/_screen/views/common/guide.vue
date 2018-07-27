<template>
    <div class="guideList">
        <div class="wrapper relative">
            <img class="absolute" src="../../assets/images/bg_rule.jpg" alt="">

            <div class="box tc absolute">
                <div class="guideList__badge inline-block cursor" @click="viewRule('seconds')">
                    争分夺秒
                </div>
                <div class="guideList__badge inline-block cursor" @click="viewRule('seconds')">
                    一比高下
                </div>
                <div class="guideList__badge inline-block cursor" @click="viewRule('seconds')">
                    狭路相逢
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "guide-list",
        methods: {
            viewRule(type) {
                this.$router.push({
                    name: 'rule_index',
                    query: {
                        type: type
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .guideList {
        .wrapper {
            img {
                left: 50%;
                transform:translateX(-50%);
            }
        }


        .box {
            width: 100%;
            top: 600px;
        }

        &__badge {
            width: 440px;
            height: 165px;
            padding-top: 20px;
            background: url(../../assets/images/badge.png) no-repeat center top;
            color: @blue;
            font-size: 60px;
            font-weight: bold;
        }
    }
</style>