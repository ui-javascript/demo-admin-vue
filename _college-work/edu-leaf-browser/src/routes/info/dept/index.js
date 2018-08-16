import React from 'react' // REACT视图框架
import PropTypes from 'prop-types' // REACT类型校验
import { Row, Col, Form, Input, Button, Table,
  Modal, Icon, Popconfirm, message, Upload } from 'antd' // ant组件
import axios from 'axios' // HTTP请求库
import { CSVLink } from 'react-csv'

/**
 *  公共数据配置
 */
let url = 'http://leaf.qmen.space:8080/api/dept/' // 数据接口地址前缀
const FormItem = Form.Item // 表格项

/**
 * 主要内容 - Dept页面
 */
class DataTablePage extends React.Component {
  /**
   * 构造函数
   */
  constructor (props) {
    super(props) // 继承父级props

    // 状态机
    this.state = {
      selectedRowKeys: [],
      loading: false, // Table数据加载状态
      data: [],       // Table数据
      pagination: {}, // 分页
      modalVisible: false,
      editingId: -1,
      uploadProps: {
        action: 'http://leaf.qmen.space:8080/api/excel/dept',
        showUploadList: false,
      },
      searchText: '',
      filtered: false,
    }
  }

  /**
   * 完成DOM加载后
   */
  componentDidMount = () => {
    this.setState({ loading: true }) // 使表格处于加载状态
    this.fetch() // 加载数据到表格
    this.setState({ loading: false }) // 使表格结束加载状态
  }

  // 输入框内容变化时
  onInputChange = (e) => {
    if (e.target.value === '') {
      this.fetch()
    }

    this.setState({
      searchText: e.target.value,
    })
  }

  // 搜索
  onSearch = () => {
    const { searchText } = this.state
    const reg = new RegExp(searchText, 'gi')
    axios
      .get(url)
      .then(response => {
        // this.setState({
        //   data: response.data,
        // })
        this.setState({
          filtered: !!searchText,
          data: response.data.map((record) => {
            const match = record.name.match(reg)
            if (!match) {
              return null
            }
            return {
              ...record,
              name: (
                <span>
                  {record.name.split(reg).map((text, i) => (
                    i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
                  ))}
                </span>
              ),
            }
          }).filter(record => !!record),
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
  }

  /**
   * 及时更新批量操作的选项数组
   */
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys })
  }

  handleUploadChange = (info) => {
    const status = info.file.status
    if (status === 'done') {
      // message.success(`${info.file.name}数据导入成功.`)
      message.success('EXCEL导入成功')
    } else if (status === 'error') {
      message.error('EXCEL导入失败.')
    }

    this.fetch()
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
        this.setState({
          data: response.data,
        })
        // console.log(JSON.stringify(response.data))
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
      modalVisible: true, // 显示系部信息修改模态框
    })
    // 要改
    this.props.form.setFields({
      name: { value: index.name }, // 读取信息显示在表单上
      intro: { value: index.intro },
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
      intro: form.getFieldValue('intro'),
      description: form.getFieldValue('description'),
      status: 1,
    }).then(() => {
      this.setState({
        loading: false,
      })
      this.fetch()
      this.props.form.resetFields() // 清空
      message.success('新增系部成功')
    })
    .catch(() => {
      this.setState({
        loading: false,
      })
      message.error('新增系部失败,请注意系部名称')
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
        intro: form.getFieldValue('intro'),
        description: form.getFieldValue('description'),
        status: 1,
      })
      .then(() => {
        this.setState({ loading: false })
        this.fetch()
        message.success('修改系部信息成功')
      })
      .catch(() => {
        this.setState({ loading: false })
        message.error('修改系部信息失败')
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

  /**
   * 渲染页面
   */
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
          <Col md={16} sm={24}>
            <Form layout="inline" style={{ marginBottom: '10px' }}>
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
                <Button type="dashed" style={{ marginRight: '3%' }} onClick={this.postModalHandler}>新建系部</Button>
              </FormItem>
              <FormItem>
                <Upload
                  {...this.state.uploadProps}
                  onChange={this.handleUploadChange}
                >
                  <Button type="dashed" style={{ marginRight: '3%' }}>
                    <Icon type="upload" /> 导入EXCEL
                  </Button>
                </Upload>
              </FormItem>
              <FormItem>
                <CSVLink
                  data={this.state.data}
                  filename={"系部信息.csv"}
                >
                  <Button style={{ marginRight: '3%' }}>导出excel</Button>
                </CSVLink>
              </FormItem>
            </Form>
          </Col>
          <Col md={8} sm={24}>
            <Form layout="inline"
              onSubmit={this.handleSubmit}
              style={{ float: 'right', marginBottom: '10px', clear: 'both' }}
            >
              <FormItem>
                <Input
                  placeholder="Search name"
                  value={this.state.searchText}
                  onChange={this.onInputChange}
                  onPressEnter={this.onSearch}
                  placeholder="输入关键词"
                />
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.onSearch}
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
                  title: '系部ID',
                  dataIndex: 'id',
                }, {
                  title: '系部名称',
                  dataIndex: 'name',
                }, {
                  title: '系部说明',
                  dataIndex: 'intro',
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
          title={this.state.editingId < 0 ? '新增系部' : '修改系部信息'}
          visible={this.state.modalVisible}
          onOk={this.state.editingId < 0 ? this.postOne : this.putById}
          onCancel={this.hidePutModal}
          okText="确认"
          cancelText="取消"
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入系部名!' }],
              })(
                <Input prefix={<Icon type="user" />} placeholder="系部名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('intro')(
                <Input prefix={<Icon type="info-circle-o" />} placeholder="系部说明" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('description')(
                <Input prefix={<Icon type="message" />} placeholder="系部备注" />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

// 类型校验
DataTablePage.propTypes = {
  form: PropTypes.object,
  size: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
}

// 需要先create
const DeptInfoPage = Form.create()(DataTablePage)
export default DeptInfoPage
