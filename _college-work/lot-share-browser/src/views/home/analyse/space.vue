<template>
<section>

  <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
    <el-form :inline="true" :model="filters">
      <el-form-item label="统计时段">
        <el-date-picker v-model="period" type="daterange" align="right" placeholder="选择日期范围" :picker-options="picker">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="drawCharts">查询</el-button>
      </el-form-item>
    </el-form>
  </el-col>

  <el-col :span="8">
    <div id="chartBar" style="width:100%; height:400px;"></div>
  </el-col>
  <el-col :span="16">
    <div id="chartLine" style="width:100%; height:400px;"></div>
  </el-col>


</section>
</template>

<script>
import echarts from 'echarts';

export default {
  data() {
    return {
      picker: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },

      filters: {
        name: ''
      },

      period: '',
      errors: [],

      chartBar: null,
    };
  },

  methods: {
    drawLineChart() {
      this.chartLine = echarts.init(document.getElementById('chartLine'));
      this.chartLine.setOption({
        title: {
          text: '车位-平均开放时长'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['上午','下午','全天']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['3月1日', '3月2日', '3月3日', '3月4日', '3月5日', '3月6日', '3月7日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
            name: '上午',
            type: 'line',
            stack: '总量',
            data: [3.5, 3.2, 3.4, 3.3, 3.4, 3.4, 3.4]
          },
          {
            name: '下午',
            type: 'line',
            stack: '总量',
            data: [3.0, 5.0, 5.0, 5.0, 5.1, 5.1, 5.1]
          },
					{
						name: '全天',
						type: 'line',
						stack: '总量',
						data: [6.5, 8.2, 8.4, 8.3, 8.4, 8.4, 8.4]
					}
        ]
      });
    },

    drawBarChart() {
      this.chartBar = echarts.init(document.getElementById('chartBar'));
      this.chartBar.setOption({
        title: {
          text: '车位-订单数排行',
          // subtext: '数据来自网络'
        },
        legend: {
          data: ['总订单','已完成订单'],
          right: 'right'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['A-7812', 'A-7865', 'B-6723', 'A-2343', 'G-7654', 'A-7653']
        },
        series: [{
            name: '总订单',
            type: 'bar',
						data: [25, 26, 27, 27, 29, 31]
          },
					{
	            name: '已完成订单',
	            type: 'bar',
							data: [22, 19, 25, 26, 29, 30]
	          }
        ]
      });
    },

    drawCharts() {
      // this.drawColumnChart()
      this.drawBarChart()
      this.drawLineChart()
      // this.drawPieChart()
    },

  },

  mounted: function() {
    this.drawCharts()
  },

  updated: function() {
    this.drawCharts()
  }
}
</script>

<style scoped>
/*.chart-container {
  width: 100%;
  float: left;
}*/

.el-col {
  /*padding: 30px 20px;*/
}
</style>
