import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import user from './modules/user'
import msgSocket from './modules/msgSocket'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    msgSocket
  },
  getters,
  /**
   * https://www.cnblogs.com/lemoncool/p/9645587.html
   * 利用session或者cookie持久化vuex, 解决F5刷新时vuex丢失的问题
   */
  plugins: [createPersistedState(
    {
      storage: window.sessionStorage
      /**
       *       配置部分数据持久化, 默认是全部
       */
      // reducer(val) {
      //   return {
      //     // 只储存state中的user
      //     user: val.user
      //   }
      // }
    }
  )]
})

export default store
