<template>
    <el-dialog
            title="提示"
            :visible="visible"
            width="30%">

        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="close()">取 消</el-button>
            <el-button type="primary" @click="close()">确 定</el-button>
        </span>

    </el-dialog>
</template>

<script>

    // 弹框正确打开方式
    // 可以优化?
    // https://blog.csdn.net/qq_33594380/article/details/79670400

    export default {
        name: "ranking",
        props: {
            visible: {
                type: Boolean
            },
        },
        data () {
            return {
            }
        },
        methods: {
            close() {
                this.$emit('close')
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>