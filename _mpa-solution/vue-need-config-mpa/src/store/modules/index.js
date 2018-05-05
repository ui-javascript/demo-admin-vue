import * as types from '../mutation-types'

const state = {
  index: 'indexModule'
}

const getters = {
  indexGetter: state => state.index
}

const actions = {
  execMutation({ commit, state }, msg) {
    commit(types.MUTATION_TYPES_INDEX, { msg })
  }
}

const mutations = {
  [types.MUTATION_TYPES_INDEX](state, { msg }) {
    state.index += `:${msg}`
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
