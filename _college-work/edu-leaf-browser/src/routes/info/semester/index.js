import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Input, Button, Select, Table,
   Modal, DatePicker, Radio, Popconfirm, Icon, message } from 'antd'
import axios from 'axios' // HTTP请求库

let url = 'http://leaf.qmen.space:8080/api/semester'
const RadioGroup = Radio.Group
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
      rangeDate: [],
      isNow: 1,
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

  onRadioChange = (e) => {
    this.setState({
      isNow: e.target.value,
    })
  }

  onRangeDateChange = (dateString) => {
    this.setState({
      rangeDate: dateString,
    })
  }

  /**
   * 启动/重置函数
   */
  start = () => {
    this.setState({
      selectedRowKeys: [],
      loading: false,
      rangeDate: [],
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
      begin_date: { value: index.begin_date },
      end_date: { value: index.end_date },
      description: { value: index.description },
      year_id: { value: index.year_id },
      is_now: { value: index.is_now },
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
      begin_date: this.state.rangeDate[0],
      end_date: this.state.rangeDate[1],
      description: form.getFieldValue('description'),
      // year_id: form.getFieldValue('year_id'),
      year_id: 1,
      is_now: this.state.isNow,
      status: 1,
    }).then(() => {
      this.setState({
        loading: false,
      })
      this.fetch()
      this.props.form.resetFields() // 清空
      message.success('新增学年学期成功')
    })
    .catch(() => {
      this.setState({
        loading: false,
      })
      message.error('新增学年学期失败,请注意学年学期名称')
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
        begin_date: form.getFieldValue('rangeDate')[0],
        end_date: form.getFieldValue('rangeDate')[1],
        description: form.getFieldValue('description'),
        year_id: form.getFieldValue('year_id'),
        is_now: form.getFieldValue('isNow'),
        status: 1,
      })
      .then(() => {
        this.setState({ loading: false })
        this.fetch()
        message.success('修改学年学期信息成功')
      })
      .catch(() => {
        this.setState({ loading: false })
        message.error('修改学年学期信息失败')
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
    const { RangePicker } = DatePicker
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
                <Button type="dashed" style={{ marginRight: '3%' }} onClick={this.postModalHandler}>添加学年学期</Button>
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
                  <Option value="all">所有条件</Option>
                  <Option value="1">学年</Option>
                  <Option value="2">学期</Option>
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
                  title: '学年学期ID',
                  dataIndex: 'id',
                }, {
                  title: '学年学期名称',
                  dataIndex: 'name',
                }, {
                  title: '起始日期',
                  dataIndex: 'begin_date',
                }, {
                  title: '终止日期',
                  dataIndex: 'end_date',
                }, {
                  title: '备注',
                  dataIndex: 'description',
                }, {
                  title: '年份',
                  dataIndex: 'year_id',
                }, {
                  title: '是否为当前学期',
                  dataIndex: 'is_now',
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
          title={this.state.editingId < 0 ? '新增学年学期' : '修改学年学期信息'}
          visible={this.state.modalVisible}
          onOk={this.state.editingId < 0 ? this.postOne : this.putById}
          onCancel={this.hidePutModal}
          okText="确认"
          cancelText="取消"
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入学年学期！' }],
            })(
              <Input prefix={<Icon type="user" />} placeholder="学年学期名" />
            )}
            </FormItem>
            <FormItem label="选择起始日期和终止日期">
            {getFieldDecorator('rangeDate', {
              rules: [{ required: true, message: '请选择日期！' }],
            })(
              <RangePicker onChange={this.onRangeDateChange} />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('description')(
              <Input prefix={<Icon type="message" />} placeholder="备注" />
            )}
            </FormItem>
            <FormItem label="是否为当前学期">
            {getFieldDecorator('isNow', {
              initialValue: '1',
            })(
              <RadioGroup onChange={this.onRadioChange}>
                <Radio value={1}>是</Radio>
                <Radio value={0}>否</Radio>
              </RadioGroup>
            )}
            </FormItem>
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

const semesterInfoPage = Form.create()(DataTablePage)

export default semesterInfoPage
