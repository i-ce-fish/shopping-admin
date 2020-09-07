import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/login'

const state = {
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {

  setToken({ commit }, token) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', token)
      setToken(token)
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },

  login({ commit, dispatch }, userForm) {
    return new Promise(async(resolve) => {
      const res = await login(userForm)
      commit('SET_TOKEN', res.data.token)
      dispatch('initWebsocket')
      resolve()
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

