import * as types from '../mutation-types'

const state = {
  page2: 'page2Module'
}

const getters = {
  page2Getter: state => state.page2
}

const actions = {
  execMutation2({ commit, state }, msg) {
    commit(types.MUTATION_TYPES_PAGE2, { msg })
  }
}

const mutations = {
  [types.MUTATION_TYPES_PAGE2](state, { msg }) {
    state.page2 += `:${msg}`
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
