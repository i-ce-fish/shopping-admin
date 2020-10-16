import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/login'
import store from '@/store'

const state = {
  token: getToken(),
  roles: []
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {

  setToken({ commit }, token) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', token)
      // todo 添加角色 v-permission需要用
      commit('SET_ROLES', ['admin'])
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
      store.dispatch('msgSocket/init')
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

