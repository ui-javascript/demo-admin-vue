<template>
    <div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getProgress} from './service/exam'

    export default {
        data() {
            return {
                active: 0
            }
        },
        methods: {},
        computed: {
            ...mapGetters({
                token: 'token',
            })
        },
        mounted() {
            if (this.token) {
                getProgress().then(res => {
                    this.$store.dispatch('UpdateProgress', {
                        module: res.moduleType,
                        group: res.subType,
                        problem: res.number
                    })
                })

            }
        }
    }
</script>

<style>

</style>
