<template>
    <div class="mainWarp">
        <group>
            <calendar v-model="demo3" title="禁止选择未来时间" disable-future></calendar>
        </group>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                demo1: '',
                demo2: 'TODAY',
                demo3: 'TODAY'
            }
        },
        methods: {}
    }
</script>

<style lang="less">

    body {
        background-color: #fbf9fe;
    }
</style>