import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Input, Button, Select, Table,
   Modal, Popconfirm, Icon, Cascader, DatePicker, message } from 'antd'
import axios from 'axios' // HTTP请求库

let url = 'http://leaf.qmen.space:8080/api/stu/'
const FormItem = Form.Item

const cascaderoptions = [{
  value: 'computer',
  label: '计算机系',
  children: [{
    value: 'science',
    label: '计算机科学与技术',
    children: [{
      value: 'xihu',
      label: '计144',
    }],
  }],
}, {
  value: 'wulianwang',
  label: '物联网系',
  children: [{
    value: 'nanjing',
    label: '物联网应用',
    children: [{
      value: 'zhonghuamen',
      label: '物联网141',
    }],
  }],
}]

function onCascaderChange (value) {
  console.log(value)
}


const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  }],
}]

function onChanges (value) {
  console.log(value)
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
      stu_num: { value: index.stu_num }, // 读取信息显示在表单上
      name: { value: index.name },
      gender: { value: index.gender },
      deptId: { value: index.deptId },
      majorId: { value: index.majorId },
      classId: { value: index.classtId },
      tel: { value: index.tel },
      email: { value: index.email },
      birthday: { value: index.birthday },
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
      stu_num: form.getFieldValue('stu_num'),
      name: form.getFieldValue('name'),
      gender: form.getFieldValue('gender'),
      deptId: form.getFieldValue('deptId'),
      majorId: form.getFieldValue('majorId'),
      classId: form.getFieldValue('classId'),
      tel: form.getFieldValue('tel'),
      email: form.getFieldValue('email'),
      birthday: form.getFieldValue('birthday'),
      description: form.getFieldValue('description'),
      status: 1,
    }).then(() => {
      this.setState({
        loading: false,
      })
      this.fetch()
      this.props.form.resetFields() // 清空
      message.success('新增学生成功')
    })
    .catch(() => {
      this.setState({
        loading: false,
      })
      message.error('新增学生失败,请注意信息填写')
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
        stu_num: form.getFieldValue('stu_num'),
        name: form.getFieldValue('name'),
        gender: form.getFieldValue('gender'),
        deptId: form.getFieldValue('deptId'),
        majorId: form.getFieldValue('majorId'),
        classId: form.getFieldValue('classId'),
        tel: form.getFieldValue('tel'),
        email: form.getFieldValue('email'),
        birthday: form.getFieldValue('birthday'),
        description: form.getFieldValue('description'),
        status: 1,
      })
      .then(() => {
        this.setState({ loading: false })
        this.fetch()
        message.success('修改学生信息成功')
      })
      .catch(() => {
        this.setState({ loading: false })
        message.error('修改学生信息失败')
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
                <Button type="dashed" style={{ marginRight: '3%' }} onClick={this.postModalHandler}>新增学生</Button>
              </FormItem>
              <FormItem>
                <Button type="dashed" style={{ marginRight: '3%' }}>Excel导入</Button>
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
                  <Input placeholder="输入学号或姓名关键词" />
                )}
              </FormItem>
              <FormItem>
                <Cascader options={cascaderoptions} onChange={onCascaderChange} changeOnSelect placeholder={'请选择'} />
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
                  title: '学号',
                  dataIndex: 'stu_num',
                  width: 100,
                  fixed: 'left',
                }, {
                  title: '姓名',
                  dataIndex: 'name',
                  width: 100,
                  fixed: 'left',
                }, {
                  title: '性别',
                  dataIndex: 'gender',
                }, {
                  title: '系别',
                  dataIndex: 'deptId',
                }, {
                  title: '专业',
                  dataIndex: 'majorId',
                }, {
                  title: '年级',
                  dataIndex: 'grade',
                }, {
                  title: '班级',
                  dataIndex: 'classId',
                }, {
                  title: '手机',
                  dataIndex: 'tel',
                }, {
                  title: '邮箱',
                  dataIndex: 'email',
                }, {
                  title: '生日',
                  dataIndex: 'birthday',
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
          title={this.state.editingId < 0 ? '新增学生' : '修改学生信息'}
          visible={this.state.modalVisible}
          onOk={this.state.editingId < 0 ? this.postOne : this.putById}
          onCancel={this.hidePutModal}
          okText="确认"
          cancelText="取消"
        >
          <Form onSubmit={this.handleSubmit}>
            <Form>
              <FormItem>
              {getFieldDecorator('stu_num', {
                rules: [{ required: true, message: '请输入学号！' }],
              })(
                <Input prefix={<Icon type="user" />} placeholder="学号" />
              )}
              </FormItem>
              <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入姓名！' }],
              })(
                <Input prefix={<Icon type="user" />} placeholder="学生姓名" />
              )}
              </FormItem>
              <FormItem label="性别">
              {getFieldDecorator('gender', {
                rules: [{ required: true, message: '请选择性别！' }],
              })(
                <Select defaultValue="null" style={{ width: 120 }} >
                  <Option value="man">男</Option>
                  <Option value="woman">女</Option>
                </Select>
              )}
              </FormItem>
              <FormItem label="选择系别专业年级班级">
              {getFieldDecorator('majorname', {
                rules: [{ required: true, message: '请选择相关信息！' }],
              })(
                <Cascader options={options} onChange={onChanges} placeholder="Please select" />
              )}
              </FormItem>
              <FormItem label="手机">
              {getFieldDecorator('tel', {
                rules: [{ required: true, message: '手机不能为空！' }],
              })(
                <Input />
              )}
              </FormItem>
              <FormItem label="邮箱">
              {getFieldDecorator('mail', {
                rules: [{ required: true, message: '邮箱不能为空！' }],
              })(
                <Input />
              )}
              </FormItem>
              <FormItem label="生日">
              {getFieldDecorator('birthday', {
                rules: [{ required: true, message: '请选择生日！' }],
              })(
                <DatePicker onChange={this.onChange} />
              )}
              </FormItem>
              <FormItem label="备注">
              {getFieldDecorator('description')(<Input type="textarea" />)}
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

const StuInfoPage = Form.create()(DataTablePage)

export default StuInfoPage
