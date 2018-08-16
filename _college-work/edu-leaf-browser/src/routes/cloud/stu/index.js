import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Input, Button, Select, Table } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

// 表格的数据
const columns = [{
  title: '文件名',
  dataIndex: 'filename',
}, {
  title: '课程',
  dataIndex: 'belong',
}, {
  title: '上传者',
  dataIndex: 'type',
}, {
  title: '大小',
  dataIndex: 'size',
}, {
  title: '日期',
  dataIndex: 'date',
}, {
  title: '下载次数',
  dataIndex: 'dltimes',
}]

const data = []
for (let i = 0; i < 12; i++) {
  data.push({
    key: i,
    filename: `文件 ${i}.pdf`,
    type: '王鑫',
    belong: '计算机网络',
    size: `${i}`,
    date: '2017-03-12',
    dltimes: 12,
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

    const { size } = this.props
    const state = this.state

    return (
      <div className="content-inner">
        <Row>
          <Col md={10} sm={24}>
            <Form layout="inline">
              <FormItem>
                <Button type="primary" style={{ marginRight: '3%' }}>批量下载</Button>
              </FormItem>
              <FormItem>
                <Button onClick={this.start}
                  disabled={!hasSelected} loading={loading} style={{ marginRight: '3%' }}
                >重置</Button>
              </FormItem>
            </Form>
          </Col>
          <Col md={14} sm={24}>
            <Form layout="inline"
              onSubmit={this.handleSubmit}
            >
              <FormItem
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError || ''}
              >
                {(
                  <Input placeholder="输入文件名关键词" />
                )}
              </FormItem>
              <FormItem>
                <Select
                  value={state.currency}
                  size={size}
                  style={{ width: 120 }}
                  onChange={this.handleCurrencyChange}
                >
                  <Option value="all">所有课程</Option>
                  <Option value="material">计算机网络</Option>
                  <Option value="model">软件工程</Option>
                </Select>
              </FormItem>
              <FormItem>
                <Select
                  value={state.currency}
                  size={size}
                  style={{ width: 120 }}
                  onChange={this.handleCurrencyChange}
                >
                  <Option value="all">所有教师</Option>
                  <Option value="material">王鑫</Option>
                  <Option value="model">李梅</Option>
                </Select>
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
                <span style={{ marginLeft: 8 }}>{hasSelected ? `您选中了 ${selectedRowKeys.length} 项` : ''}</span>
              </div>
              <Table rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                bordered
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
