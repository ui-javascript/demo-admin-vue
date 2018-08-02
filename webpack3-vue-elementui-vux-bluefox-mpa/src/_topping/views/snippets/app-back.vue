<template>
    <div class="appBack">
        <img
                class="appBack__btn"
                src="../../assets/images/btn_back.png"
                alt="退出icon"
                @click="back()"
        >
    </div>
</template>

<script>

    export default {
        name: "appBack",
        props: {
            // 返回路由
            backRouterName: {
                type: String,
                default: ''
            }
        },
        methods: {
            back() {
                if (this.backRouterName) {
                    this.$router.push({
                        path: this.backRouterName
                    })
                } else {
                    this.$router.go(-1)
                }
            }
        },
        mounted() {
            console.log(this.backRouterName)
        }
    }
</script>

<style lang="less" scoped>
    .appBack {

        &__btn {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 158/4px;
            height: 159/4px;
        }
    }

    /* iphone5等小屏幕 */
    @media screen
    and (max-device-width: 350px) {

    }
</style>