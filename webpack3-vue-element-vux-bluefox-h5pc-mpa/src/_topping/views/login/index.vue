<template>
    <div class="userLogin">

        <img src="../../assets/images/bg_login.jpg" alt="">

        <!--<div class="userLogin__bg"></div>-->

        <div class="userLogin__box tc">

            <div class="userLogin__box_input">
                <div class="inline-block tc">
                    <span class="userLogin__box_input_label">姓名：</span>
                    <input type="text" v-model="username">
                </div>

                <div class="userLogin__box_input">
                    <div class="inline-block tc">
                        <span class="userLogin__box_input_label">手机号码：</span>
                        <input type="text" v-model="password">
                    </div>
                </div>

                <div class="userLogin__box_btn" @click.off="submit()"></div>
            </div>

        </div>

        <footer-mask></footer-mask>

    </div>
</template>

<script>
    import {setToken} from "../../router/_auth"
    import {login} from "../../api/login"
    import footerMask from "../snippets/footer-mask"

    export default {
        components: {
            footerMask
        },
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            submit() {
                this.$store.dispatch('Login', {
                    username: this.username,
                    password: this.password
                }).then(res => {

                    res = res || {}
                    if (res.error) {
                        this.$vux.toast.text('用户名或密码错误')
                    }
                    else {
                        // socket连接
                        this.$emit('sse')

                        this.$router.push({
                            path: '/rule'
                        })
                    }


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
            /*top: 260px;*/
            top: 0;
            width: 100%;
            text-align: center;

            /* margin-top的高度是按照宽度来的，不是按照高度，很诡异 */
            margin-top: 62%;

            &_btn {
                margin-top: 20px;
                display: inline-block;
                width: 300/1.2px;
                height: 100/1.2px;
                /*margin-left: -30px;*/
                background: url(../../assets/images/btn_login.png) 100% 100%;
                background-size: cover;
            }

            &_input {
                width: 100%;
                box-sizing: border-box;
                margin-top: 20px;

                .inline-block {
                    width: 300px;
                    border: 1px solid #ddd;
                    border-radius: 20px;
                    height: 42px;
                    background: #fff;
                }

                &_label {
                    width: 90px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 18px;
                    color: #ddd;
                    text-align: left;
                    display: inline-block;
                }

                input {
                    background: #fff;
                    border: none;
                    height: 40px;
                    box-sizing: border-box;
                }

                &:first-child {
                    margin-top: 0;
                }
            }

        }
    }

    /* iphone5等小屏幕 */
    @media screen
    and (max-device-width: 350px) {
        .userLogin {
            &__box {
                /*top: 220px;*/

                /*&_input {*/
                /*top: 20px;*/
                /*}*/
            }
        }
    }
</style>