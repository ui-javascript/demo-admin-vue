/**
 * 呈现数据的表格
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { request } from '../../utils'
import lodash from 'lodash' // JS函数工具库
import './DataTable.less'

// 继承自React.component, 不要再用creatclass模拟
class DataTable extends React.Component {
  // 构造器
  constructor (props) {
    super(props) // 继承父级
    const { dataSource, pagination = {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: 100 },
    } = props

    // 当前状态
    this.state = {
      loading: false,
      dataSource,
      fetchData: {},
      pagination,
    }
  }

  // 组件加载完成
  componentDidMount () {
    // 有数据就扒数据
    if (this.props.fetch) {
      this.fetch()
    }
  }

  // 接收新的参数的时候
  // nextProps 下一个属性
  componentWillReceiveProps (nextProps) {
    const staticNextProps = lodash.cloneDeep(nextProps) // 深度赋值
    delete staticNextProps.columns // 删除它的列
    const { columns, ...otherProps } = this.props // "..."表示参数数组

    // ??有新变动的时候
    if (!lodash.isEqual(staticNextProps, otherProps)) {
      this.props = nextProps
      this.fetch()
    }
  }

  // 处理表格数据变化
  // 排序、过滤器引起的
  handleTableChange = (pagination, filters, sorter) => {
    const pager = this.state.pagination // 将state状态机的参数传进来
    pager.current = pagination.current  // 传递当前页

    // 设置状态
    // 分页器参数
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

  // 抓取数据的函数
  fetch = () => {
    const { fetch: { url, data, dataKey } } = this.props
    const { fetchData } = this.state
    this.setState({ loading: true }) // 抓取前处于loading状态
    this.promise = request({
      url,
      data: {
        ...data,
        ...fetchData,
      },
    }).then((result) => {
      // 没有dataTable
      if (!this.refs.DataTable) {
        return
      }
      const { pagination } = this.state
      pagination.total = result.total || pagination.total
      this.setState({
        loading: false,
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

// 校验
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
