import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Transfer, Card } from 'antd'
import { PieChart, Pie, Cell,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
// import axios from 'axios' // HTTP请求库

// let url = 'http://leaf.qmen.space:8080/api/task/'
// const FormItem = Form.Item

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
const RADIAN = Math.PI / 180

// 雷达图数据
const RadarData = [
  { subject: '学识学位', A: 120, B: 110, fullMark: 150 },
  { subject: '教学态度', A: 98, B: 130, fullMark: 150 },
  { subject: '工作效率', A: 86, B: 130, fullMark: 150 },
  { subject: '细心负责', A: 99, B: 100, fullMark: 150 },
  { subject: '考试模式', A: 85, B: 90, fullMark: 150 },
  { subject: '兴趣培养', A: 65, B: 85, fullMark: 150 },
]

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      笔试{`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

class DataTablePage extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedRowKeys: [],
      loading: false,
      data: [],       // Table数据
      pagination: {}, // 分页
      modalVisible: false,  //
      editingId: -1,
    }
  }

  componentDidMount () {
    this.getMock()
  }

  getMock () {
    const targetKeys = []
    const mockData = []
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `任务${i + 1}`,
        description: `内容${i + 1}`,
        chosen: 1,
      }
      if (data.chosen) {
        targetKeys.push(data.key)
      }
      mockData.push(data)
    }
    this.setState({ mockData, targetKeys })
  }

  handleChange = (targetKeys) => {
    this.setState({ targetKeys })
  }

  render () {
    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col md={12} sm={24}>
            <Card title="任务列表">
              <Transfer
                dataSource={this.state.mockData}
                showSearch
                searchPlaceholder={'请输入搜索内容'}
                listStyle={{
                  width: 200,
                  height: 300,
                }}
                notFoundContent={'列表为空'}
                titles={['已完成', '代办']}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange}
                render={item => `${item.title}-${item.description}`}
              />
            </Card>
          </Col>
          <Col md={12} sm={24}>
            <Card title="来自学生的评价">
              <RadarChart cx={230} cy={170} outerRadius={120} width={500} height={400} data={RadarData}>
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
              </RadarChart>
            </Card>
          </Col>
          <Col md={12} sm={24}>
            <Card title="课程分数占比 - 计算机网络">
              <PieChart width={500} height={340} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={pieData}
                  cx={230}
                  cy={180}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={140}
                  fill="#8884d8"
                >
                  {
                    pieData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
              </PieChart>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

DataTablePage.propTypes = {
  form: PropTypes.object,
  size: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
}

renderCustomizedLabel.propTypes = {
  cx: PropTypes.any,
  cy: PropTypes.any,
  midAngle: PropTypes.any,
  innerRadius: PropTypes.any,
  outerRadius: PropTypes.any,
  percent: PropTypes.any,
  index: PropTypes.any,
}

// const WrappedHorizontalLoginForm = Form.create()(DataTablePage)

export default DataTablePage
