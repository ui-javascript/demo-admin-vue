/**
 * 404页面, 没有组件,直接上页面
 */
import React from 'react'
import { Icon } from 'antd'
import styles from './index.less'

const Error = () => <div className="content-inner">
  <div className={styles.error}>
    <Icon type="frown-o" />
    <h1>该页面被汪星人抓走了</h1>
  </div>
</div>

export default Error
