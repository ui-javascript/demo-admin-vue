import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: '/cif/login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: '/cif/userInfo/' + token,
    method: 'get'
  }).then(data => {
    sessionStorage.setItem('user', data)
    sessionStorage.setItem('tenantId', 'TE00000009')
    sessionStorage.setItem('userId', 'TE00000009')
    return data
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const getUser = () => {
  return sessionStorage.getItem('user')
}

export const getTenantId = () => {
  return sessionStorage.getItem('tenantId')
}

export const getUserId = () => {
  return sessionStorage.getItem('userId')
}
