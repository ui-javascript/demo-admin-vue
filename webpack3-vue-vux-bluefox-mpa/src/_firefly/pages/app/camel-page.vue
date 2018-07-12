<template>
    <div>
        <div class="moor-item">

            <label>Input: </label>
            <moor-input
                    v-model="input1"
                    placeholder="请输入信息">
            </moor-input>

            <moor-input
                    v-model="input2"
                    placeholder="请输入信息">
            </moor-input>

            <moor-input
                    placeholder="输入框禁用"
                    :disabled="inputDisabled">
            </moor-input>
        </div>

        <!--<div class="moor-item">-->
        <!--<label>Switch: </label>-->

        <!--<moor-switch-->
        <!--v-model="lightSwitch">开关(开):</moor-switch>-->

        <!--<moor-switch-->
        <!--v-model="switchLight">开关(关):</moor-switch>-->
        <!--</div>-->


    </div>
</template>

<script>
    export default {
        data () {
            return {
                // HelloWorld
                msg: 'Welcome to moor UI!',
                color: 'red',
                // input
                input1: '',
                input2: '这是默认值',
                inputDisabled: true,
                // switch
                lightSwitch: false,
                switchLight: true
            }
        },
        watch: {
            // lightSwitch: newValue => console.log('开关：', newValue),
        }
    }
</script>

<style scoped>
    .moor-select, .moor-btn, .moor-switch, .moor-input {
        margin: 10px 6px;
    }
    .moor-item {
        display: flex;
        align-items: center;
    }
    .moor-item label {
        width: 100px;
        display: inline-block;
    }
</style>