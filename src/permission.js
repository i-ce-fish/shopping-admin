import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from "@/utils/get-page-title"

// 加载进度条
NProgress.configure({ showSpinner: false }) // NProgress Configuration

/**
 * 页面路由权限白名单, 不需要权限即可访问
 */
const whiteList = ['/login'] // no redirect whitelist

// 路由导航守卫, 每一个路由都会经过这里, 可以在这里做页面权限的判断
router.beforeEach(async(to, from, next) => {
  // 进度条bar的开始
  NProgress.start()

  // set page title  or default title
  document.title = to.meta.title || 'cms'

  // determine whether the user has logged in
  // const hasToken = getToken()
  const hasToken = store.getters.token
  // 如果有token
  if (hasToken) {
    // 如果目标页面是登录页
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      // 直接跳转
      next({ path: '/' })
      // 结束进度条
      NProgress.done()
    } else {
      // todo 需要判断是否含有userinfo , 没有就通过token请求获取
      const hasGetUserInfo = store.getters.name
      // 判断是否已经有userinfo(和token不一样)
      if (hasGetUserInfo) {
        next()
      } else {
        // 没有就重新从接口获取
        try {
          // get user info
          // await store.dispatch("user/getInfo")
          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          // next(`/login?redirect=${to.path}`)
          next(`/login`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    // 没有token, 判断目标页是否白名单页
    // eslint-disable-next-line no-lonely-if
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // 不是白名单就跳转到登录页
      // other pages that do not have permission to access are redirected to the login page.
      // next(`/login?redirect=${to.path}`)
      next(`/login`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 进度条加载结束
  NProgress.done()
})

