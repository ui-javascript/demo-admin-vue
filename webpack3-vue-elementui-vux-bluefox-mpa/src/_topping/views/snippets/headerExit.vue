<template>
    <div class="headerExit relative">
        <img
            class="headerExit__close"
            src="../../assets/images/exit.png"
            alt="关闭icon"
            @click="exit()"
        >
        <img class="headerExit__bg" src="../../assets/images/header.png" alt="">
    </div> 
</template>

<script>
    import { removeToken } from "../../router/_auth"

    export default {

        data() {
            return {

            }
        },
        methods: {
            exit() {
                removeToken()

                this.$router.push({
                    path: '/login'
                })
            }
        }
    }
</script>

<style lang="less">
    .headerExit {
        /*width: 100%;*/

        &__bg  {
            /*position: absolute;*/
            width: 100%;
            /*top: 0;*/
        }

        &__close {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 150/1.1px;
            height: 62/1.1px;
        }
    }


</style>