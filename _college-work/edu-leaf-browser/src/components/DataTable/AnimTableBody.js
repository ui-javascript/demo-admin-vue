/**
 * 表格框图动画
 */
import React from 'react'
import PropTypes from 'prop-types'
import { TweenOneGroup } from 'rc-tween-one'

// 进场动画
const enterAnim = [
  {
    opacity: 0,
    x: 30,
    backgroundColor: '#fffeee',
    duration: 0,
  }, {
    height: 0,
    duration: 200,
    type: 'from',
    delay: 250,
    ease: 'easeOutQuad',
    onComplete: (e) => {
      e.target.style.height = 'auto'
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

// 表格动画组件
const AnimTableBody = ({ body, page = 1, current }) => {
  // 如果当前页不等于页数
  if (current !== +page) { // "+"号可以把变量转化成Number
    return body
  }

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
  current: PropTypes.number.isRequired, // 要求必须为Number
}

export default AnimTableBody
