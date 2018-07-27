<template>
    <el-dialog
            title="提示"
            :visible="visible"
            width="30%">

        <el-table
                :data="list"
                height="250"
                border
                style="width: 100%">
            <el-table-column
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="trueName"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="companyName"
                    label="公司"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="score"
                    label="得分">
            </el-table-column>
        </el-table>

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

    import { getRanking } from '../../../service/ranking'

    export default {
        name: "ranking",
        props: {
            visible: {
                type: Boolean
            },
        },
        data() {
            return {
                list:
                    []
            }
        },
        methods: {
            close() {
                this.$emit('close')
            }
        },
        mounted() {
            let type = null

            getRanking({
                problemType: type
            }).then(res => {
                this.list = res
            }).catch({})
        }
    }
</script>

<style scoped>

</style>
