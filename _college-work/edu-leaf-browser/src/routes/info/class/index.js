import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Input, Button, Select, Table,
   Modal, Popconfirm, Icon, message } from 'antd'
import axios from 'axios' // HTTP请求库

let url = 'http://leaf.qmen.space:8080/api/aclass/'
const FormItem = Form.Item
const Option = Select.Option

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
      majorId: { value: index.majorId },
      description: { value: index.description },
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
      majorId: form.getFieldValue('majorId'),
      description: form.getFieldValue('description'),
      status: 1,
    }).then(() => {
      this.setState({
        loading: false,
      })
      this.fetch()
      this.props.form.resetFields() // 清空
      message.success('新增班级成功')
    })
    .catch(() => {
      this.setState({
        loading: false,
      })
      message.error('新增班级失败,请注意班级名称')
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
        majorId: form.getFieldValue('majorId'),
        description: form.getFieldValue('description'),
        status: 1,
      })
      .then(() => {
        this.setState({ loading: false })
        this.fetch()
        message.success('修改班级信息成功')
      })
      .catch(() => {
        this.setState({ loading: false })
        message.error('修改班级信息失败')
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
    const { size } = this.props
    const state = this.state

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
                <Button type="dashed" style={{ marginRight: '3%' }} onClick={this.postModalHandler}>新建班级</Button>
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
                <Select
                  value={state.currency}
                  size={size}
                  style={{ width: 120 }}
                  onChange={this.handleCurrencyChange}
                >
                  <Option value="all">所有专业</Option>
                  <Option value="1">计算机科学与技术</Option>
                  <Option value="2">物联网</Option>
                </Select>
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
                  title: '班级ID',
                  dataIndex: 'id',
                }, {
                  title: '班级名称',
                  dataIndex: 'name',
                }, {
                  title: '所属专业',
                  dataIndex: 'majorId',
                }, {
                  title: '备注',
                  dataIndex: 'description',
                }, {
                  title: '操作',
                  key: 'operate',
                  fixed: 'right',
                  width: 100,
                  render: (index) => <a onClick={() => this.putModalHandler(index)}>编辑</a>,
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
          title={this.state.editingId < 0 ? '新增班级' : '修改班级信息'}
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
                rules: [{ required: true, message: '请输入班级名！' }],
              })(
                <Input prefix={<Icon type="user" />} placeholder="班级名" />
              )}
              </FormItem>
              <FormItem label="所属专业">
              {getFieldDecorator('majorId', {
                rules: [{ required: true, message: '请选择所属专业！' }],
              })(
                <Select defaultValue="1" style={{ width: 120 }} >
                  <Option value="1">计算机科学与技术</Option>
                  <Option value="2">物联网</Option>
                </Select>
              )}
              </FormItem>
              <FormItem>
              {getFieldDecorator('description')(
                <Input prefix={<Icon type="message" />} placeholder="专业备注" />
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

const ClassInfoPage = Form.create()(DataTablePage)

export default ClassInfoPage
