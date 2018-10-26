/**
 * 封装一些公共方法
 */

export default {
  /**
   * 存储localStorage
   */
  setStore(content, name = 'hopoBoost') {
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  },

  /**
   * 获取localStorage
   */
  getStore(name = 'hopoBoost') {
    return window.localStorage.getItem(name)
  },

  /**
   * 删除localStorage
   */
  removeStore(name = 'hopoBoost') {
    window.localStorage.removeItem(name)
  }
}
