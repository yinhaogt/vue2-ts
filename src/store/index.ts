import Vuex from 'vuex'
import Vue from 'vue'
import { state, State } from './state'

Vue.use(Vuex)
const store = new Vuex.Store<State>({
  state: state
})

export default store
