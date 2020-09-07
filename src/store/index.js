import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import msgSocket from './modules/msgSocket'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    msgSocket
  },
  getters
})

export default store
