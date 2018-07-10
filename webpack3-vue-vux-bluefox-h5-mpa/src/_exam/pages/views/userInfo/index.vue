<template>
    <div class="mainWarp">
        <group>
            <calendar v-model="demo1" title="通用" disable-past></calendar>
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