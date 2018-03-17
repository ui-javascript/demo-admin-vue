import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import index from './modules/index'
import page1 from './modules/page1'
import page2 from './modules/page2'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    index,
    page1,
    page2
  }
})
