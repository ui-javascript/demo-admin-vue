<template>
    <div>

        <div @click="viewRule('seconds')">争分夺秒</div>
        <div @click="viewRule('higher')">一比高下</div>
        <div @click="viewRule('narrow')">狭路相逢</div>

    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            ready() {

            },
            // 查看规则
            viewRule(type) {
                switch (type) {
                    // case 'seconds':
                    //     break
                }
            }
        },
        mounted() {
            this.ready()
        }
    }
</script>

<style lang="less">

</style>