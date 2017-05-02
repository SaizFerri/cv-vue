import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

/**
 * Store for the whole app
 */
export default new Vuex.Store({
  state,
  mutations,
  actions
})
