<template>
<section>

	<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
		<el-form :inline="true" :model="filters">
			<el-form-item label="统计时段">
				<el-date-picker
					v-model="period"
					type="daterange"
					align="right"
					placeholder="选择日期范围"
					:picker-options="picker">
				</el-date-picker>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="drawCharts">查询</el-button>
			</el-form-item>
		</el-form>
	</el-col>

	<el-col :span="12">
			<div id="chartLine" style="width:100%; height:420px;"></div>
	</el-col>
	<el-col :span="12">
			<div id="chartLine2" style="width:100%; height:420px;"></div>
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
					text: '订单数量统计(订单类型)'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['上午','下午','全天'],
					right: 'right'
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
						data: [22, 18, 19, 23, 29, 33, 31]
					},
					{
						name: '下午',
						type: 'line',
						stack: '总量',
						data: [10, 12, 11, 34, 12, 13, 20]
					},
					{
						name: '全天',
						type: 'line',
						stack: '总量',
						data: [9, 12, 9, 7, 12, 10, 10]
					}
				]
			});
		},

		drawLineChart2() {
			this.chartLine = echarts.init(document.getElementById('chartLine2'));
			this.chartLine.setOption({
				title: {
					text: '订单数量统计(达成情况)'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['全部','完成','取消'],
					right: 'right'
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
						name: '全部',
						type: 'line',
						stack: '总量',
						data: [12, 16, 18, 46, 24, 26, 25]
					},
					{
						name: '完成',
						type: 'line',
						stack: '总量',
						data: [10, 12, 11, 34, 12, 13, 20]
					},
					{
						name: '取消',
						type: 'line',
						stack: '总量',
						data: [2, 4, 5, 7, 12, 13, 5]
					}
				]
			});
		},

		// drawPieChart() {
		// 		this.chartPie = echarts.init(document.getElementById('chartPie'));
		// 		this.chartPie.setOption({
		// 				title: {
		// 						text: '收入占比图',
		// 						// subtext: '纯属虚构',
		// 						x: 'center'
		// 				},
		// 				tooltip: {
		// 						trigger: 'item',
		// 						formatter: "{a} <br/>{b} : {c} ({d}%)"
		// 				},
		// 				legend: {
		// 						orient: 'vertical',
		// 						left: 'left',
		// 						data: ['小区收入', '业主收入', '运营平台收入']
		// 				},
		// 				series: [
		// 						{
		// 								name: '访问来源',
		// 								type: 'pie',
		// 								radius: '55%',
		// 								center: ['50%', '60%'],
		// 								data: [
		// 										{ value: 335, name: '小区收入' },
		// 										{ value: 310, name: '业主收入' },
		// 										{ value: 234, name: '运营平台收入' },
		// 								],
		// 								itemStyle: {
		// 										emphasis: {
		// 												shadowBlur: 10,
		// 												shadowOffsetX: 0,
		// 												shadowColor: 'rgba(0, 0, 0, 0.5)'
		// 										}
		// 								}
		// 						}
		// 				]
		// 		});
		// },

    drawCharts() {
      // this.drawColumnChart()
      // this.drawBarChart()
      this.drawLineChart()
			this.drawLineChart2()
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
