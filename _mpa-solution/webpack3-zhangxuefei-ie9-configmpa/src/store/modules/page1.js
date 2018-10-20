import * as types from '../mutation-types'

const state = {
  page1: 'page1Module'
}

const getters = {
  page1Getter: state => state.page1
}

const actions = {
  execMutation1({ commit, state }, msg) {
    commit(types.MUTATION_TYPES_PAGE1, msg)
  }
}

const mutations = {
  [types.MUTATION_TYPES_PAGE1](state, msg) {
    state.page1 += `:${msg}`
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
