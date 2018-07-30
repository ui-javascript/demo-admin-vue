<template>
    <div class="ruleIndex">
        <header-exit></header-exit>
        <keep-alive>
            <router-view :key="$route.fullPath" v-if="isRouterAlive"></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import headerExit from "../snippets/header-exit"
    // import CheckboxList from '../../components/CheckboxList'

    export default {
        components: {
            headerExit,
            // CountdownCircle,
            // CheckboxList
        },
        data() {
            return {
                isRouterAlive: true
            }
        },
        provide() {
            return {
                reload: this.reload()
            }
        },
        methods: {
            reload() {
                this.isRouterAlive = false
                this.$nextTick(() => {
                    this.isRouterAlive = true
                })
            }
        },
        mounted() {


        }
    }
</script>

<style lang="less">


</style>