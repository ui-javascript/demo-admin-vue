import * as types from './mutation-types'

export const execRootAction = function ({ commit, state }, msg) {
  commit(types.MUTATION_TYPES_PAGE1, msg)
}
