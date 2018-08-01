<template>
    <div class="UserExit">
        <img
                class="UserExit__close"
                src="../../assets/images/exit.png"
                alt="关闭icon"
                @click="exit()"
        >
    </div>
</template>

<script>
    export default {
        name: "UserExit",
        methods: {
            exit() {
                this.$store.dispatch('FedLogOut').then(() => {
                    this.$router.push({
                        path: '/login'
                    })
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .UserExit {

        &__close {
            position: absolute;
            top: 5px;
            right: 0px;
            width: 150/1.3px;
            height: 62/1.3px;
        }
    }

    /* iphone5等小屏幕 */
    @media screen
    and (max-device-width: 350px) {
        .UserExit {

            &__close {
                position: absolute;
                top: 5px;
                right: 0px;
                width: 150/1.8px;
                height: 62/1.8px;
            }
        }
    }
</style>