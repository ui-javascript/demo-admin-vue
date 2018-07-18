<template>
    <div class="userLogin">

            <img src="../../assets/images/bg_login.jpg" alt="">

            <div class="userLogin__bg">
                <router-link to="/404">404</router-link>
                <router-link to="/login">登录</router-link>
                <router-link to="/seconds">争分夺秒</router-link>
                <router-link to="/high">一比高下</router-link>
                <router-link to="/narrow">狭路相逢</router-link>
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

        }
    }
</script>

<style lang="less">
    .userLogin {
        width: 100%;
        height: 100%;
        position: relative;

        img {
            width: 100%;
        }

        &__bg {
            position: absolute;
            top: 0;
        }


    }
</style>