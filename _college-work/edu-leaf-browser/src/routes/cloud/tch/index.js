import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Input, Button, Table, Upload, Modal, Icon } from 'antd'

const FormItem = Form.Item
const Dragger = Upload.Dragger
// 上传的文件
const draggerUploadProps = {
  multiple: true,
  action: 'http://leaf.qmen.space:8080/api/upload',
  // onChange ({ file, fileList }) {
  //   if (file.status !== 'uploading') {
  //     console.log(file, fileList)
  //   }
  // },
  onChange (info) {
    const status = info.file.status
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    // if (status === 'done') {
    //   message.success(`${info.file.name} file uploaded successfully.`);
    // } else if (status === 'error') {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  },
  defaultFileList: [],
}
// const Option = Select.Option

// 表格的数据
const columns = [{
  title: '文件名',
  dataIndex: 'name',
}, {
  title: '大小',
  dataIndex: 'size',
}, {
  title: '文件类型',
  dataIndex: 'materialTypeId',
}, {
  title: '日期',
  dataIndex: 'uploadDt',
}, {
  title: '备注',
  dataIndex: 'description',
}, {
  title: '下载次数',
  dataIndex: 'dlTimes',
}, {
  title: '操作',
  key: 'operate',
  render: () => <span><a href="#">编辑</a> | <a href="#">替换</a> | <a href="#">分享</a></span>,
}]

const data = []
for (let i = 0; i < 12; i++) {
  data.push({
    name: `文件 ${i}.pdf`,
    description: '教学材料',
    materialTypeId: '教学材料',
    size: `${i}`,
    uploadDt: '2017-03-12',
    dlTimes: 12,
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
      ModalText: 'Content of the modal',
      visible: false,
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
  handleOk = () => {
    // console.log(e)
    this.setState({
      visible: false,
    })
  }
  handleCancel = () => {
    // console.log(e)
    this.setState({
      visible: false,
    })
  }
  render () {
    const { getFieldsError } = this.props.form
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = selectedRowKeys.length > 0

    return (
      <div className="content-inner">
        <Modal
          title="上传文件"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form layout="vertical">
            <Dragger {...draggerUploadProps}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">可将上传文件拖拽至此处</p>
              <p className="ant-upload-hint">支持多文件上传,但是请严格检查文件格式</p>
            </Dragger>
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
              style={{ float: 'right', marginBottom: '10px', clear: 'both' }}
            >
              <FormItem>
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
              <Table
                rowKey={record => record.uid}
                rowSelection={rowSelection}
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
