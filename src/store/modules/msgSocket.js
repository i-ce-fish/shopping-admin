const state = {
  msgs: [{
    content: 'test msg1',
    type: 'alert'
  }, {
    content: 'test msg2',
    type: 'alert'
  }],
  webSocket: {}
}

const mutations = {
  SET_SOCKET: (state, socket) => {
    state.webSocket = socket
  },
  SET_MSG: (state, msgs) => {
    state.msgs = msgs
  }
}

const actions = {
  // todo init socket by userinfo
  init({ commit, state, dispatch }, user) {
    return new Promise((resolve) => {
      const ws = new WebSocket('ws://127.0.0.1:8887')
      console.log('init')
      commit('SET_SOCKET', ws)
      dispatch('receive')
      resolve()
    }).catch((rej) => {
      console.log('init websocket error', rej)
    })
  },
  send({ commit, state }, msg) {
    return new Promise((resolve) => {
      const ws = state.webSocket
      ws.onopen = () => {
        ws.send(msg)
      }
      resolve()
    })
  },
  receive({ commit, state }) {
    return new Promise((resolve) => {
      state.webSocket.onmessage = (evt) => {
        const msgs = evt.data
        commit('SET_MSG', msgs)
        // todo 登录成功后获取未读的消息

        // 侧面消息提醒
        this.$notify({
          title: '标题名称',
          message: this.$createElement('i', '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        })
      }
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

