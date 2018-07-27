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
            return {

            }
        },
        methods: {

        },
        mounted() {
            login('17816869505', '17816869505').then(res => {
                console.log(res)
                setToken(res.data)
                this.$router.push({
                    name: 'welcome_index'
                })
            }).catch()
        }
    }
</script>


<style>

</style>

