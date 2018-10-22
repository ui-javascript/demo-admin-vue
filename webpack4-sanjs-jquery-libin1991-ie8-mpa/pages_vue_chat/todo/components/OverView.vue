<template>
  <div class="wrapper">
    <div class="content">
      <h3 class="content-title">
        任务总览
      </h3>
      <el-row :gutter="20">
        <el-col :span="12">
          <h4 class="content-head">
            任务数/完成任务数：{{totalNum}}/{{completeNum}}
          </h4>
          <h4 class="content-head">
            完成比例：{{completeRate}}%
          </h4>
        </el-col>
        <el-col :span="12">
          <h4 class="content-head">
            任务类别数：{{taskTypeNum}}
          </h4>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="chart-wrapper" ref="taskNum"></div>
        </el-col>
        <el-col :span="12">
          <div class="chart-wrapper" ref="taskType"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  //
  import Echarts from "echarts";
  import PouchDB from "pouchdb";

  var taskDB = new PouchDB("taskLists");
  var typeDB = new PouchDB("taskTypes");

  export default {
    name: "OverView",
    components: {},
    props: {},
    data() {
      return {
        totalNum: 0,
        completeNum: 0,
        completeRate: 0,
        taskTypeNum: 0,
        taskTypeCount: {},
        typeChartData: []
      };
    },
    watch: {},
    computed: {},
    methods: {
      setPiechartOption: function (title, name, dataLists) {
        return {
          title: {
            text: title,
            x: "center"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: "vertical",
            left: "left"
          },
          series: [
            {
              name: name,
              type: "pie",
              radius: "55%",
              center: ["50%", "60%"],
              data: dataLists,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        };
      }
    },
    created() {
      taskDB
        .allDocs({
          include_docs: true
        })
        .then(res => {
          this.totalNum = res.total_rows;
          //统计完成任务数
          res.rows.forEach(row => {
            if (row.doc.status) {
              this.completeNum++;
            }
            // 统计每个分类下的任务数
            if (!this.taskTypeCount[row.doc.type]) {
              this.taskTypeCount[row.doc.type] = 1;
            } else {
              this.taskTypeCount[row.doc.type]++;
            }
          });
          this.totalNum === 0
            ? (this.completeRate = parseFloat(0) * 100).toFixed(2)
            : (this.completeRate =
              (parseFloat(this.completeNum / this.totalNum) * 100).toFixed(2));

          typeDB.allDocs().then(_res => {
            this.taskTypeNum = _res.total_rows;
            for (var key in this.taskTypeCount) {
              this.typeChartData.push({
                name: key,
                value: this.taskTypeCount[key]
              });
            }
          });
          // console.log(this.taskTypeCount);
        })
        .catch(err => {
          console.log(err);
        });
    },
    updated() {
      var taskChart = Echarts.init(this.$refs["taskNum"]);
      taskChart.setOption(
        this.setPiechartOption("任务占比", "任务数", [
          {value: this.completeNum, name: "完成任务数"},
          {value: this.totalNum - this.completeNum, name: "未完成任务数"}
        ])
      );

      var typeChart = Echarts.init(this.$refs["taskType"]);
      typeChart.setOption(
        this.setPiechartOption("任务类型", "任务类型", this.typeChartData)
      );
    }
  };
</script>
<style lang="less" scoped>
  .wrapper {
    width: 90%;
    margin: 0 auto;

    .content {
      .chart-wrapper {
        width: 100%;
        height: 300px;
      }
    }
  }
</style>
