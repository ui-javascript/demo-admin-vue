/*
 * 表格外部呈现动画
 */

import React from 'react'
import PropTypes from 'prop-types'
import { TweenOneGroup } from 'rc-tween-one'
// 动画效果antd https://motion.ant.design/api/tween-one

// 进场动画
const enterAnim = [
  {
    opacity: 0, // 透明度为0
    x: 30,
    backgroundColor: '#fffeee',
    duration: 0,
  }, {
    height: 0, // 开始高度为0
    duration: 200,
    type: 'from',
    delay: 250,
    ease: 'easeOutQuad',
    onComplete: (e) => {
      e.target.style.height = 'auto' // 动画完成高度自定
    },
  }, {
    opacity: 1,
    x: 0,
    duration: 250,
    ease: 'easeOutQuad',
  }, {
    delay: 1000,
    backgroundColor: '#fff',
  },
]

// 离场动画
const leaveAnim = [
  {
    duration: 250,
    x: -30,
    opacity: 0,
  }, {
    height: 0,
    duration: 200,
    ease: 'easeOutQuad',
  },
]

// 动画表格Body
const AnimTableBody = ({ body, page = 1, current }) => {
  // 如果抓取不到数据?
  if (current !== +page) { // 变量前加上+后，变量将转换为数字，进行数字运算
    return body
  }

  // 抓取到数据
  return (
    <TweenOneGroup
      component="tbody"
      className={body.props.className}
      enter={enterAnim}
      leave={leaveAnim}
      appear={false}
    >
      {body.props.children}
    </TweenOneGroup>
  )
}

// 校验
AnimTableBody.propTypes = {
  body: PropTypes.element,
  page: PropTypes.any,
  current: PropTypes.number.isRequired,
}

export default AnimTableBody
