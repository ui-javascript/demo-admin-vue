import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Input, Button, Table } from 'antd'

const FormItem = Form.Item
// const Option = Select.Option

// 表格的数据
const columns = [{
  title: '课程代码',
  dataIndex: 'courseid',
  width: 100,
  fixed: 'left',
}, {
  title: '课程名称',
  dataIndex: 'coursename',
  width: 100,
  fixed: 'left',
}, {
  title: '教学班',
  dataIndex: 'class',
}, {
  title: '教师姓名',
  dataIndex: 'tchname',
}, {
  title: '职称',
  dataIndex: 'tchtitle',
}, {
  title: '人数',
  dataIndex: 'stunum',
}, {
  title: '考核方式',
  dataIndex: 'way',
}, {
  title: '起止周',
  dataIndex: 'fromto',
}, {
  title: '学时',
  dataIndex: 'time',
}, {
  title: '总学时',
  dataIndex: 'total',
}, {
  title: '周学时',
  dataIndex: 'week',
}, {
  title: '学分',
  dataIndex: 'score',
}, {
  title: '理论学时',
  dataIndex: 'basic',
}, {
  title: '实验学时',
  dataIndex: 'lab',
}, {
  title: '学年',
  dataIndex: 'year',
}, {
  title: '学期',
  dataIndex: 'semester',
}, {
  title: '操作',
  key: 'operate',
  fixed: 'right',
  width: 100,
  render: () => <a href="#">编辑</a>,
}]

const data = []
for (let i = 0; i < 12; i++) {
  data.push({
    key: i,
    courseid: i,
    coursename: `计算机网络${i}`,
    class: `计1${i}`,
    tchname: '王鑫',
    tchtitle: '教授',
    stunum: 12,
    way: '期末考核',
    fromto: '1-16周',
    time: 12,
    total: 56,
    week: 2,
    score: 2,
    basic: 2,
    lab: 2,
    year: 2,
    semester: '16春',
  })
}


function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

class DataTablePage extends React.Component {
  constructor (props) {
    super(props)
    const value = this.props.value || {}

    this.state = {
      number: value.number || 0,
      currency: value.currency || 'all',
      selectedRowKeys: [],  // Check here to configure the default column
      loading: false,
    }
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }

  start = () => {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      })
    }, 1000)
  }

  handleCurrencyChange = (currency) => {
    if (!('value' in this.props)) {
      this.setState({ currency })
    }
    this.triggerChange({ currency })
  }

  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue))
    }
  }

  render () {
    const { getFieldsError, getFieldError, isFieldTouched } = this.props.form

    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = selectedRowKeys.length > 0

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName')
    // const passwordError = isFieldTouched('password') && getFieldError('password')

    // const { size } = this.props
    // const state = this.state

    return (
      <div className="content-inner">
        <Row>
          <Col md={12} sm={24}>
            <Form layout="inline">
              <FormItem>
                <Button type="danger" style={{ marginRight: '3%' }}>批量删除</Button>
              </FormItem>
              <FormItem>
                <Button onClick={this.start}
                  disabled={!hasSelected} loading={loading} style={{ marginRight: '3%' }}
                >重置</Button>
              </FormItem>
              <FormItem>
                <Button type="dashed" style={{ marginRight: '3%' }}>EXCEL导入</Button>
              </FormItem>
            </Form>
          </Col>
          <Col md={12} sm={24}>
            <Form layout="inline"
              onSubmit={this.handleSubmit}
            >
              <FormItem
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError || ''}
              >
                {(
                  <Input placeholder="输入关键词" />
                )}
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={hasErrors(getFieldsError())}
                >
                  查询
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={24}>
            <div>
              <div style={{ marginBottom: 16 }}>
                <span style={{ marginLeft: 8 }}>{hasSelected ? `选中了 ${selectedRowKeys.length} 项` : ''}</span>
              </div>
              <Table rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                bordered
                scroll={{ x: 1300 }}
              />
            </div>
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

const WrappedHorizontalLoginForm = Form.create()(DataTablePage)

export default WrappedHorizontalLoginForm
