<template>
    <div>
        <h2>表头不固定的table</h2>

        <div class="table-resizable" id="table-resizable1">
            <table class="table table-striped table-bordered table-hover bank-table">
                <thead>
                <tr>
                    <th class="th-btn pointer">
                        执行周期
                    </th>
                    <th class="th-btn pointer">
                        用户
                    </th>
                    <th class="th-btn pointer">
                        脚本路径
                    </th>
                    <th class="th-btn pointer">
                        参数
                    </th>
                    <th class="th-btn pointer">
                        日志信息
                    </th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>
                        <a href="#">查看脚本</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="6">没有数据</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div style="height: 8px; background: #ccc; margin: 30px 0"></div>
        <h2>表头固定的table</h2>
        <div class="table-resizable" id="table-resizable2">
            <div style="width: 100%;">
                <table class="table table-striped table-bordered table-hover bank-table">
                    <thead>
                    <tr>
                        <th class="th-btn pointer">
                            执行周期
                        </th>
                        <th class="th-btn pointer">
                            用户
                        </th>
                        <th class="th-btn pointer">
                            脚本路径
                        </th>
                        <th class="th-btn pointer">
                            参数
                        </th>
                        <th class="th-btn pointer">
                            日志信息
                        </th>
                        <th>操作</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div style="height: 200px; overflow-y: scroll;">
                <table class="table table-striped table-bordered table-hover bank-table">
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <a href="#">查看脚本</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <a href="#">查看脚本</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <a href="#">查看脚本</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <a href="#">查看脚本</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <a href="#">查看脚本</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <a href="#">查看脚本</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <a href="#">查看脚本</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <a href="#">查看脚本</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <a href="#">查看脚本</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <a href="#">查看脚本</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <a href="#">查看脚本</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6">没有数据</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>


</template>

<script>
    // https://github.com/shiyangzhaoa/table-resizable
    // @TODO 没有拖动的那条线？？？ 应该有的
    import tableResizable from 'utils/dom/tableResizable'

    export default {
        mounted() {
            const table1 = new tableResizable('table-resizable1');
            const table2 = new tableResizable('table-resizable2');
        }
    }
</script>

<style scoped>
    body {
        height: 100vh;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
    }

    .table-resizable {
        position: relative;
    }

    body.table-resizing {
        cursor: col-resize !important;
        user-select: none;
    }

    table {
        margin: 0 !important;
        table-layout: fixed;
    }

    table td {
        word-break: break-all;
    }

    table th {
        position: relative;
        user-select: none;
    }

    .resizable-hold {
        position: absolute;
        left: 200px;
        top: 0;
        bottom: 0;
        width: 0;
        border-left: 1px solid rgb(223, 230, 236);
        z-index: 10;
        display: none;
    }
</style>