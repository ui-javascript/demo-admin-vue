/**
 * 面包屑
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Icon } from 'antd'
import { Link } from 'dva/router'
import styles from './Bread.less'
import pathToRegexp from 'path-to-regexp'
import { queryArray } from '../../utils'

// import fetch from 'dva/fetch'  // 导入fetch的模块
// fetch('/users', {              // 发送请求
//   method: 'GET',  // 请求方式(可以自己添加header的参数)
//   mode: 'cors',   // 避免cors攻击
//   credentials: 'include',
// }).then(function(response) {
//   // 打印返回的json数据
//   response.json().then(function(data) {   // 将response进行json格式化
//     console.log(data)                      // 打印
//   })
// }).catch(function(e) {
//   console.log('Oops, error')
// })

// 面包屑
const Bread = ({ menu }) => {
  // 匹配当前路由
  let pathArray = []
  let current
  for (let index in menu) {
    if (menu[index].router && pathToRegexp(menu[index].router).exec(location.pathname)) {
      current = menu[index]
      break
    }
  }

  const getPathArray = (item) => {
    pathArray.unshift(item)
    if (item.bpid) {
      getPathArray(queryArray(menu, item.bpid, 'id'))
    }
  }

  if (!current) {
    pathArray.push(menu[0])
    pathArray.push({
      id: 404,
      name: 'Not Found',
    })
  } else {
    getPathArray(current)
  }

  // 递归查找父级
  const breads = pathArray.map((item, key) => {
    const content = (
      <span>{item.icon
          ? <Icon type={item.icon} style={{ marginRight: 4 }} />
          : ''}{item.name}</span>
    )
    return (
      <Breadcrumb.Item key={key}>
        {((pathArray.length - 1) !== key)
          ? <Link to={item.router}>
              {content}
          </Link>
          : content}
      </Breadcrumb.Item>
    )
  })

  return (
    <div className={styles.bread}>
      <Breadcrumb>
        {breads}
      </Breadcrumb>
    </div>
  )
}

// 校验
Bread.propTypes = {
  menu: PropTypes.array,
}

export default Bread
