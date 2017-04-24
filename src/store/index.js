import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

/**
 * Store for the whole app
 */
export default new Vuex.Store({
  state
})
