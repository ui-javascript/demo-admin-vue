<template>
    <div>
        登录
    </div>
</template>

<script>
    import {login} from '../../service/login'
    import {setToken} from '../../router/_auth'

    export default {

        data() {
            return {}
        },
        methods: {},
        mounted() {

            this.$store.dispatch('Login', {
                username: 'admin',
                password: 'password'
            }).then(res => {

                res = res || {}
                if (res.error) {
                    // this.$vux.toast.text('用户名或密码错误')
                }
                else {
                    this.$router.push({
                        name: 'welcome_index'
                    })
                }

            })

        }
    }
</script>


<style>

</style>

