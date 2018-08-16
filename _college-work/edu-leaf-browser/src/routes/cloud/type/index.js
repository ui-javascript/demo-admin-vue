import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Button, Table, Upload, Input, Modal, Select, Radio, Icon } from 'antd'
const RadioGroup = Radio.Group
const FormItem = Form.Item

// 上传的模板
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
  title: '模板名',
  dataIndex: 'type',
}, {
  title: '创建日期',
  dataIndex: 'date',
}, {
  title: '创建者',
  dataIndex: 'from',
}, {
  title: '是够必交',
  dataIndex: 'isrequired',
}, {
  title: '操作',
  key: 'operate',
  render: () => <a href="#">编辑</a>,
}]

const data = [{
  key: 1,
  type: '教学大纲',
  isrequired: '否',
  date: '2017-03-12',
  from: '王鑫',
}, {
  key: 2,
  isrequired: '是',
  type: '实验教学进度表',
  date: '2017-03-12',
  from: '李伟',
}]


// function hasErrors (fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field])
// }

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
    // const { getFieldsError, getFieldError, isFieldTouched } = this.props.form

    const { loading, selectedRowKeys } = this.state
    const { confirmLoading } = this.state
    const { form } = this.props
    const { getFieldDecorator } = form
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = selectedRowKeys.length > 0

    // Only show error after a field is touched.
    // const userNameError = isFieldTouched('userName') && getFieldError('userName')
    // const passwordError = isFieldTouched('password') && getFieldError('password')


    return (
      <div className="content-inner">
        <Modal
          title="新增模板类型"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form layout="vertical">
            <FormItem label="模板名">
            {getFieldDecorator('type', {
              rules: [{ required: true, message: '模板名不能为空！' }],
            })(
              <Input />
            )}
            </FormItem>
            <FormItem label="模板说明">
            {getFieldDecorator('description')(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="所属专业">
            {getFieldDecorator('majorname', {
              rules: [{ required: true, message: '请选择所属专业！' }],
            })(
              <Select defaultValue="null" style={{ width: 120 }} >
                <Option value="wulianwang">软件工程</Option>
                <Option value="material">计算机科学与技术</Option>
                <Option value="model">物联网</Option>
              </Select>
            )}
            </FormItem>
            <FormItem label="是否必交" className="collection-create-form_last-form-item">
            {getFieldDecorator('modifier', {
              initialValue: 'Yes',
            })(
              <RadioGroup>
                <Radio value="Yes">是</Radio>
                <Radio value="No">否</Radio>
              </RadioGroup>
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
                <Button type="danger" style={{ marginRight: '3%' }}>批量删除</Button>
              </FormItem>
              <FormItem>
                <Button onClick={this.start}
                  disabled={!hasSelected} loading={loading} style={{ marginRight: '3%' }}
                >重置</Button>
              </FormItem>
              <FormItem>
                <Button type="dashed" style={{ marginRight: '3%' }} onClick={this.showModal}>新建模板类型</Button>
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
}

const WrappedHorizontalLoginForm = Form.create()(DataTablePage)

export default WrappedHorizontalLoginForm
