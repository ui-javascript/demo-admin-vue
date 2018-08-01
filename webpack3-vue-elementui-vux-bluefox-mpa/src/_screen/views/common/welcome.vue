<template>
    <div class="guideWelcome" @click="nextPage()">
        <div class="wrapper relative">
            <img class="absolute" src="../../assets/images/bg_welcome.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "common-welcome",
        methods: {
            nextPage() {
                this.$router.push({
                    name: 'common_guide'
                })
            }
        }
    }
</script>

<style lang="less">
    .guideWelcome {
        .wrapper {
            img {
                left: 50%;
                transform: translateX(-50%);
            }
        }

    }
</style>