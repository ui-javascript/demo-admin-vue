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

	<el-col :span="16">
			<div id="chartLine" style="width:100%; height:400px;"></div>
	</el-col>
	<el-col :span="8">
			<div id="chartPie" style="width:100%; height:400px;"></div>
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
								text: '车辆数据统计'
						},
						tooltip: {
								trigger: 'axis'
						},
						legend: {
								data: ['新租客车辆数', '总车辆数']
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
						series: [
								{
										name: '新租客车辆数',
										type: 'line',
										stack: '总量',
										data: [4, 8, 6, 3, 0, 1, 1]
								},
								{
										name: '总车辆数',
										type: 'line',
										stack: '总量',
										data: [22, 27, 29, 31, 30, 32, 32]
								}
						]
				});
		},

		drawPieChart() {
				this.chartPie = echarts.init(document.getElementById('chartPie'));
				this.chartPie.setOption({
						title: {
								text: '车辆类型占比图',
								// subtext: '纯属虚构',
								x: 'center'
						},
						tooltip: {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)"
						},
						legend: {
								orient: 'vertical',
								left: 'left',
								data: ['新租客车辆数', '总车辆数']
						},
						series: [
								{
										name: '访问来源',
										type: 'pie',
										radius: '55%',
										center: ['50%', '60%'],
										data: [
												{ value: 67, name: '新租客车辆数' },
												{ value: 234, name: '总车辆数' },
										],
										itemStyle: {
												emphasis: {
														shadowBlur: 10,
														shadowOffsetX: 0,
														shadowColor: 'rgba(0, 0, 0, 0.5)'
												}
										}
								}
						]
				});
		},

    drawCharts() {
      // this.drawColumnChart()
      // this.drawBarChart()
      this.drawLineChart()
      this.drawPieChart()
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
