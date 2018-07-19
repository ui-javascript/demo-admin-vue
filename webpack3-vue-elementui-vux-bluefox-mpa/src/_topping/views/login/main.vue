<template>
    <div class="userLogin">

            <img src="../../assets/images/bg_login.jpg" alt="">

            <div class="userLogin__bg">
                <!--<router-link to="/404">404</router-link>-->
                <!--<router-link to="/login">登录</router-link>-->
                <!--<router-link to="/seconds">争分夺秒</router-link>-->
                <!--<router-link to="/high">一比高下</router-link>-->
                <!--<router-link to="/narrow">狭路相逢</router-link>-->
            </div>

            <div class="userLogin__box tc">

                <div class="userLogin__box_input">
                    <div class="inline-block tc">
                        <span>姓名</span>
                        <input type="text" v-model="username">
                    </div>
                </div>

                <div class="userLogin__box_input mt-10">
                    <div class="inline-block tc">
                        <span>密码</span>
                        <input type="text" v-model="password">
                    </div>
                </div>

                <div class="userLogin__box_btn" @click="submit()"></div>
            </div>


    </div>
</template>

<script>
    import {setToken } from "../../router/_auth";

    export default {

        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            submit() {
                setToken(this.username)
                this.$router.push({
                    path: '/index'
                })
            }
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

        &__box {
            position: absolute;
            top: 360px;
            width: 100%;
            text-align: center;

            &_btn {
                display: inline-block;
                width: 367px;
                height: 100px;
                background: url(../../assets/images/btn_login.png) 100% 100%;
                background-size: cover;
            }

            &_input {
                width: 100%;
            }

            .inline-block {
                width: 100%;
            }
        }
    }
</style>