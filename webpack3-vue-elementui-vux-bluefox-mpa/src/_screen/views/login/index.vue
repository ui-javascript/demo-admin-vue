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

            login('admin', 'pinming9158').then(res => {

                debugger
                if (res.success) {
                    setToken(res.data)

                    this.$router.push({
                        name: 'welcome_index'
                    })
                }
                else {

                }

            }).catch()
        }
    }
</script>


<style>

</style>

