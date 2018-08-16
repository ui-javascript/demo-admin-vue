import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Input, Button, Select, Table, Upload, Icon, Modal } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

// 上传的文件
const propss = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange ({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList)
    }
  },
  defaultFileList: [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    reponse: 'Server Error 500',  // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: 2,
    name: 'zzz.png',
    status: 'error',
    reponse: 'Server Error 500',  // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
}

// 表格的数据
const columns = [{
  title: '文件名',
  dataIndex: 'name',
}, {
  title: '类型',
  dataIndex: 'materialTypeId',
}, {
  title: '大小',
  dataIndex: 'size',
}, {
  title: '日期',
  dataIndex: 'uploadDt',
}, {
  title: '上传者',
  dataIndex: 'uploaderId',
}, {
  title: '下载次数',
  dataIndex: 'dlTimes',
}, {
  title: '操作',
  key: 'operate',
  render: () => <span><a href="#">编辑</a> | <a href="#">替换</a> | <a href="#">分享</a></span>,
}]

const data = []
for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    name: `文件 ${i}.pdf`,
    materialTypeId: '课程大纲模板',
    size: `${i}`,
    uploadDt: '2017-03-12',
    uploaderId: '王鑫',
    dlTimes: 12,
    operate: '更新',
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
      value: this.props.value,
      editable: this.editable || false,
      number: value.number || 0,
      currency: value.currency || 'all',
      selectedRowKeys: [],  // Check here to configure the default column
      loading: false,
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.editable !== this.state.editable) {
      this.setState({ editable: nextProps.editable })
      if (nextProps.editable) {
        this.cacheValue = this.state.value
      }
    }
    if (nextProps.status && nextProps.status !== this.status) {
      if (nextProps.status === 'save') {
        this.props.onChange(this.state.value)
      } else if (nextProps.status === 'cancel') {
        this.setState({ value: this.cacheValue })
        this.props.onChange(this.cacheValue)
      }
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.editable !== this.state.editable ||
           nextState.value !== this.state.value
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }
  handleChange (e) {
    const value = e.target.value
    this.setState({ value })
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
  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  handleOk = (e) => {
    console.log(e)
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    })
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      })
    }, 2000)
  }
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }
  render () {
    const { getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const { confirmLoading } = this.state
    const { form } = this.props
    const { getFieldDecorator } = form
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
        <Modal
          title="上传文件"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form layout="vertical">
            <FormItem label="文件类型">
            {getFieldDecorator('type', {
              rules: [{ required: true, message: '模板名不能为空！' }],
            })(
              <Input />
            )}
            </FormItem>
            <FormItem>
              <Upload {...propss}>
                <Button>
                  <Icon type="upload" /> 上传
                </Button>
              </Upload>
            </FormItem>
          </Form>
        </Modal>
        <Row>
          <Col md={12} sm={24}>
            <Form layout="inline">
              <FormItem>
                <Button type="primary" style={{ marginRight: '3%' }}>批量下载</Button>
              </FormItem>
              <FormItem>
                <Button type="danger" style={{ marginRight: '3%' }}>批量删除</Button>
              </FormItem>
              <FormItem>
                <Button onClick={this.start}
                  disabled={!hasSelected} loading={loading} style={{ marginRight: '3%' }}
                >重置</Button>
              </FormItem>
              <FormItem>
                <Button type="dashed" style={{ marginRight: '3%' }} onClick={this.showModal}>上传文件</Button>
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
                <Select
                  value={state.currency}
                  size={size}
                  style={{ width: 120 }}
                  onChange={this.handleCurrencyChange}
                >
                  <Option value="all">所有类型</Option>
                  <Option value="material">教学大纲</Option>
                  <Option value="model">教学进度表</Option>
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
                <span style={{ marginLeft: 8 }}>{hasSelected ? `选中了 ${selectedRowKeys.length} 项` : ''}</span>
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
  nextProps: PropTypes.any,
}

const WrappedHorizontalLoginForm = Form.create()(DataTablePage)

export default WrappedHorizontalLoginForm
