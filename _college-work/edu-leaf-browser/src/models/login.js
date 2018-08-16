/**
 * 登录数据模型
 */
import { login } from '../services/login'
import { routerRedux } from 'dva/router'
import { queryURL } from '../utils'

export default {
  // 命名空间
  namespace: 'login',

  // 状态机
  state: {
    loginLoading: false,
  },

  // effects
  effects: {
    *login ({
      payload,
    }, { put, call }) {
      yield put({ type: 'showLoginLoading' })
      const data = yield call(login, payload)
      // console.log('登录处')
      // console.log(data)
      yield put({ type: 'hideLoginLoading' })

      if (data.success) {
        const from = queryURL('from')
        yield put({ type: 'app/query' })
        if (from) {
          // 跳转到记住的页面
          yield put(routerRedux.push(from))
        } else {
          // 默认跳转到首页
          yield put(routerRedux.push('/message'))
        }
      } else {
        throw data
      }
    },
  },

  // reducers
  reducers: {
    // 展示登录loading
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },

    // 隐藏登录loading
    hideLoginLoading (state) {
      return {
        ...state,
        loginLoading: false,
      }
    },
  },
}
