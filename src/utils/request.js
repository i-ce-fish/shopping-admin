import axios from 'axios'
import { MessageBox, Message, Loading } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import router from '../router'

let loading = null
let loadTotal = 0

/**
 * 请求过程中的圆圈
 */
function ajaxBefore() {
  if (loading == null) {
    loading = Loading.service({
      lock: true,
      text: '请求执行中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0)'
    })
  }
  loadTotal++
}

/**
 * 关闭圆圈
 * @param loadingId 圆圈事件的定时器id
 */
function ajaxAfter(loadingId) {
  clearTimeout(loadingId)
  if (loading) {
    loadTotal--
    if (loadTotal === 0) {
      loading.close()
      loading = null
    }
  }
}

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: '',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    console.warn(`发送并处理过的数据请求:${config.url}`, config)

    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${getToken()}`
      config.headers.Accept = 'application/json'
    }
    return config
  },
  (error) => {
    // do something with request error
    console.log('configErr', error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    ajaxAfter()

    const res = response.data
    console.warn('返回并处理过的数据', res)
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      Message({
        message: `error code ${res.code}: ${res.msg}` || 'Unknow Error',
        type: 'error',
        duration: 3 * 1000
      })
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 401 || res.code === 500) {
        const map = new Map([[401, '没有授权'], [5000, '登录已过期']])
        // to re-login
        MessageBox.confirm(map.get(res.code), '前往登录', {
          confirmButtonText: '登录',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            // store.dispatch('user/resetToken')
            //   .then(() => {
            //     location.reload()
            //   })
            router.push('/login')
          })
      }

      return Promise.reject(new Error(res.msg || 'Error '))
    }
    return res
  },
  (error) => {
    ajaxAfter()
    console.log(`res${error}`) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

async function http(params = {}) {
  /**
   * 100ms后才执行,过滤请求时间<100ms的loading
   */
  const loadingId = setTimeout(ajaxBefore, 50)

  const data = await service(params)

  ajaxAfter(loadingId)

  return data
}

export default http
