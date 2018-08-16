/**
 * 字体图标
 */
import React from 'react'
import PropTypes from 'prop-types'
import './iconfont.less'

// 字体图标
const Iconfont = ({ type, colorful }) => {
  // 是否有色彩?
  if (colorful) {
    return (
      <span dangerouslySetInnerHTML={{
        __html: `<svg class="colorful-icon" aria-hidden="true"><use xlink:href="#${type.startsWith('#') ? type.replace(/#/, '') : type}"></use></svg>`,
      }} />
    )
  }

  // 返回常规图标
  return <i className={`antdadmin icon-${type}`} />
}

// 校验
Iconfont.propTypes = {
  type: PropTypes.string,
  colorful: PropTypes.bool,
}

export default Iconfont
