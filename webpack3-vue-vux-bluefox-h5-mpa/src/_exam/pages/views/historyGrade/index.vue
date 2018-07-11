<template>
    <div>

        <x-header :left-options="{showBack: false}">历史成绩</x-header>

        <x-table :content-bordered="false" style="background-color:#fff;">
            <thead>
            <tr style="background-color: #F7F7F7">
                <th>序号</th>
                <th>时间</th>
                <th>分数</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>2018-07-10</td>
                <td>19.12分</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2018-07-10</td>
                <td>39.12分</td>
            </tr>
            </tbody>
        </x-table>

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