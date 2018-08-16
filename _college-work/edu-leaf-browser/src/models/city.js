import * as citiesService from '../services/city'

export default {
  // 命名空间名
  namespace: 'cities',

  // 状态
  state: {
    data: [],
  },

  // 纯函数
  reducers: {
    save (state, { payload: { data } }) {
      return { ...state, data }
    },
  },

  effects: {
    // fetch
    *fetch ({ payload }, { call, put }) {
      const { data } = yield call(citiesService.fetch, { })
      yield put({
        type: 'save',
        payload: {
          data,
        },
      })
    },

    // remove
    *remove ({ payload: id }, { call, put }) {
      yield call(citiesService.remove, id)
      yield put({ type: 'reload' })
    },

    // patch
    *patch ({ payload: { id, values } }, { call, put }) {
      yield call(citiesService.patch, id, values)
      yield put({ type: 'reload' })
    },

    // create
    *create ({ payload: values }, { call, put }) {
      yield call(citiesService.create, values)
      yield put({ type: 'reload' })
    },

    // reload 重载
    *reload (action, { put }) {
      // const page = yield select(state => state.users.page)
      yield put({ type: 'fetch', payload: { } })
    },
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/info/dept') {
          dispatch({ type: 'fetch', payload: query })
        }
      })
    },
  },
}
