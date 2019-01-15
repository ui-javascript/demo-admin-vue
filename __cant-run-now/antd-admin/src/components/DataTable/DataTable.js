import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd' // 导入andt的Table
import { request } from '../../utils' // 导入request工具函数
import lodash from 'lodash'
// 一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库
// http://lodashjs.com/
import './DataTable.less'

// 数据表格
class DataTable extends React.Component {
  // 构造
  constructor (props) {
    super(props) // 继承父级
    const { dataSource, pagination = {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: 100 },
    } = props

    this.state = {
      loading: false,
      dataSource,
      fetchData: {},
      pagination,
    }
  }

  // 组件除此渲染后触发
  componentDidMount () {
    if (this.props.fetch) {
      this.fetch() // 抓取数据
    }
  }

  // 每次接受新的props触发
  componentWillReceiveProps (nextProps) {
    const staticNextProps = lodash.cloneDeep(nextProps) // 深度复制
    delete staticNextProps.columns
    const { columns, ...otherProps } = this.props

    // 如果?
    if (!lodash.isEqual(staticNextProps, otherProps)) {
      this.props = nextProps
      this.fetch()
    }
  }

  // 表格数据变化的时候
  // 分页、过滤器、排序
  // 箭头函数, ES6中引入了一种编写函数的新语法
  handleTableChange = (pagination, filters, sorter) => {
    const pager = this.state.pagination // 注意state
    pager.current = pagination.current  // 当前页
    this.setState({
      pagination: pager,
      fetchData: {
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      },
    }, () => {
      this.fetch()
    })
  }

  // fetch函数
  fetch = () => {
    const { fetch: { url, data, dataKey } } = this.props
    const { fetchData } = this.state
    this.setState({ loading: true }) // 开始加载状态
    this.promise = request({
      url,
      data: {
        ...data,
        ...fetchData,
      },
    }).then((result) => {
      // 如果没有
      if (!this.refs.DataTable) {
        return
      }
      const { pagination } = this.state
      pagination.total = result.total || pagination.total
      this.setState({
        loading: false, // 结束加载状态
        dataSource: dataKey ? result[dataKey] : result.data,
        pagination,
      })
    })
  }

  // 渲染函数
  render () {
    const { fetch, ...tableProps } = this.props
    const { loading, dataSource, pagination } = this.state

    return (<Table
      ref="DataTable"
      bordered
      loading={loading}
      onChange={this.handleTableChange}
      {...tableProps}
      pagination={pagination}
      dataSource={dataSource}
    />)
  }
}


DataTable.propTypes = {
  fetch: PropTypes.object,
  rowKey: PropTypes.string,
  pagination: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]),
  columns: PropTypes.array,
  dataSource: PropTypes.array,
}

export default DataTable
