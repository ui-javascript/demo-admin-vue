/*
 * @Author: Jerry.chenshisong
 * @Date: 2018-09-27 15:08:33
 * @Last Modified by: Jerry.chenshisong
 * @Last Modified time: 2018-09-29 17:06:01
 * 简单封装下axios
 */

import axios from 'axios'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = '/api'
// import util from '../common/js/util'

// POST传参序列化及request配置
axios.interceptors.request.use((config) => {
  config.headers['content-type'] = 'application/json'
  if (config.method === 'post') {
    // config.data = qs.stringify(config.data);
  }
  return config
})

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    return Promise.reject(res.data)
  }
  return res.data
}, (error) => {
  return Promise.reject(error.response.data)
})
export default axios
