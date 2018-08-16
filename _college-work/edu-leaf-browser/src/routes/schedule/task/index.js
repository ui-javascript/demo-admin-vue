import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Input, Button, Select, Table,
   Modal, Popconfirm, Icon, message, DatePicker } from 'antd'
import axios from 'axios' // HTTP请求库

let url = 'http://leaf.qmen.space:8080/api/task/'
const FormItem = Form.Item

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

  componentDidMount = () => {
    this.setState({ loading: true }) // 使表格处于加载状态
    this.fetch() // 加载数据到表格
    this.setState({ loading: false }) // 使表格结束加载状态
  }

  /**
   * 及时更新批量操作的选项数组
   */
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys })
  }

  /**
   * 启动/重置函数
   */
  start = () => {
    this.setState({
      selectedRowKeys: [],
      loading: false,
    })
  }

  // http请求数据
  fetch = () => {
    // 调用axios库
    axios
      .get(url)
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(e => {
        this.errors.push(e)
      })
  }

  postModalHandler = () => {
    this.props.form.resetFields() // 清空
    this.setState({
      modalVisible: true,
      editingId: -1,
    }) // 显示新增模态框
  }

  putModalHandler = (index) => {
    this.setState({
      editingId: index.id, // 更新当前编辑数据的id
      modalVisible: true, // 显示专业信息修改模态框
    })
    // 要改
    this.props.form.setFields({
      name: { value: index.name }, // 读取信息显示在表单上
      publisherId: { value: index.publisherId },
      content: { value: index.content },
      description: { value: index.description },
      beginDt: { value: index.beginDt },
      endDt: { value: index.endDt },
      fulfillment: { value: index.fulfillment },
      completedNum: { value: index.completedNum },
      totalNum: { value: index.totalNum },
    })
  }

  // 新增系部
  postOne = () => {
    let form = this.props.form
    this.setState({
      loading: true,
      modalVisible: false,
    })
    // 要改
    axios.post(url, {
      id: null,
      name: form.getFieldValue('name'),
      publisherId: form.getFieldValue('publisherId'),
      content: form.getFieldValue('content'),
      description: form.getFieldValue('description'),
      beginDt: form.getFieldValue('beginDt'),
      endDt: form.getFieldValue('endDt'),
      fulfillment: form.getFieldValue('fulfillment'),
      completedNum: form.getFieldValue('completedNum'),
      totalNum: form.getFieldValue('totalNum'),
      status: 1,
    }).then(() => {
      this.setState({
        loading: false,
      })
      this.fetch()
      this.props.form.resetFields() // 清空
      message.success('发布任务成功')
    })
    .catch(() => {
      this.setState({
        loading: false,
      })
      message.error('发布任务失败')
    })
  }

  // 根据id进行修改
  putById = () => {
    let form = this.props.form
    this.setState({
      loading: true,
      modalVisible: false,
    }) // 使表格处于数据加载状态

    axios
      .put(url, {
        id: this.state.editingId,
        name: form.getFieldValue('name'),
        publisherId: form.getFieldValue('publisherId'),
        content: form.getFieldValue('content'),
        description: form.getFieldValue('description'),
        beginDt: form.getFieldValue('beginDt'),
        endDt: form.getFieldValue('endDt'),
        fulfillment: form.getFieldValue('fulfillment'),
        completedNum: form.getFieldValue('completedNum'),
        totalNum: form.getFieldValue('totalNum'),
        status: 1,
      })
      .then(() => {
        this.setState({ loading: false })
        this.fetch()
        message.success('修改任务信息成功')
      })
      .catch(() => {
        this.setState({ loading: false })
        message.error('修改任务信息失败')
      })
  }

  // 根据id进行删除
  deleteById = (id) => {
    axios.delete(url + id).then().catch((error) => { console.log(error) })
  }

  // 批量删除
  batchDel = () => {
    this.setState({
      loading: true,
    })
    let arr = this.state.selectedRowKeys
    for (let i = 0; i < arr.length; i++) {
      this.deleteById(arr[i])
    }
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      })
      this.fetch()
    }, 1000)
  }

  // 处理提交
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  // 处理表格变动
  handleTableChange = (pagination) => {
    const pager = { ...this.state.pagination }
    pager.current = pagination.current
    this.setState({
      pagination: pager,
    })
    this.fetch()
  }

  /**
   * 隐藏模态框
   */
  hidePostModal = () => { this.setState({ modalVisible: false }) }
  hidePutModal = () => { this.setState({ modalVisible: false }) }
  render () {
    const { getFieldDecorator } = this.props.form
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = selectedRowKeys.length > 0
    // 老师的信息
    const children = []
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
    }
    return (
      <div className="content-inner">
        <Row>
          <Col md={10} sm={24}>
            <Form layout="inline">
              <FormItem>
                <Popconfirm title="确定删除这些选项吗?" onConfirm={this.batchDel} okText="是" cancelText="否">
                  <Button type="danger"
                    disabled={!hasSelected}
                    loading={loading}
                    style={{ marginRight: '3%' }}
                  >批量删除</Button>
                </Popconfirm>
              </FormItem>
              <FormItem>
                <Button onClick={this.start}
                  disabled={!hasSelected} loading={loading} style={{ marginRight: '3%' }}
                >重置</Button>
              </FormItem>
              <FormItem>
                <Button type="dashed" style={{ marginRight: '3%' }} onClick={this.postModalHandler}>发布任务</Button>
              </FormItem>
            </Form>
          </Col>
          <Col md={14} sm={24}>
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
                columns={[{
                  title: '任务名',
                  dataIndex: 'name',
                }, {
                  title: '内容',
                  dataIndex: 'content',
                }, {
                  title: '发布人',
                  dataIndex: 'publisherId',
                }, {
                  title: '开始日期',
                  dataIndex: 'beginDt',
                  sorter: (a, b) => a.deadline.length - b.deadline.length,
                }, {
                  title: '截止日期',
                  dataIndex: 'endDt',
                  sorter: (a, b) => a.deadline.length - b.deadline.length,
                }, {
                  title: '完成进度',
                  dataIndex: 'fulfillment',
                  sorter: (a, b) => a.progress - b.progress,
                }, {
                  title: '已提交份数',
                  dataIndex: 'completedNum',
                  sorter: (a, b) => a.progress - b.progress,
                }, {
                  title: '应提交份数',
                  dataIndex: 'totalNum',
                  sorter: (a, b) => a.progress - b.progress,
                }, {
                  title: '操作',
                  key: 'operate',
                  render: (index) => <span><a href="#">查看详情</a> | <a onClick={() => this.putModalHandler(index)}>编辑</a></span>,
                }]}

                dataSource={this.state.data}
                loading={this.state.loading}
                bordered
                rowKey="id"
                onChange={this.handleTableChange}
                pagination={this.state.pagination}
              />
            </div>
          </Col>
        </Row>
        <Modal
          title={this.state.editingId < 0 ? '发布任务' : '修改任务信息'}
          visible={this.state.modalVisible}
          onOk={this.state.editingId < 0 ? this.postOne : this.putById}
          onCancel={this.hidePutModal}
          okText="确认"
          cancelText="取消"
        >
          <Form onSubmit={this.handleSubmit}>
            <Form>
              <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入任务名称！' }],
              })(
                <Input prefix={<Icon type="user" />} placeholder="任务名称" />
              )}
              </FormItem>
              <FormItem>
              {getFieldDecorator('content')(
                <Input type="textarea" prefix={<Icon type="user" />} placeholder="任务内容" />
              )}
              </FormItem>
              <FormItem label="截止日期">
              {getFieldDecorator('dateline', {
                rules: [{ required: true, message: '请选择截止日期！' }],
              })(
                <DatePicker onChange={this.onChange} />
              )}
              </FormItem>
              <FormItem label="选择相关老师">
              {getFieldDecorator('description')(
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
              )}
              </FormItem>
            </Form>
          </Form>
        </Modal>
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

const TaskSchedulePage = Form.create()(DataTablePage)

export default TaskSchedulePage
