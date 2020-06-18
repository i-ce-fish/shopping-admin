import router from "@/router"
import store from "@/store"
import { Message } from "element-ui"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style
import { getToken } from "@/utils/auth" // get token from cookie
// import getPageTitle from "@/utils/get-page-title"

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 服务器未调好时，临时测试用的白名单
// const whiteList = ['/login', '/goods/index'] // no redirect whitelist
const whiteList = ["/login"] // no redirect whitelist
//
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title  or default title
  document.title = to.meta.title || "cms"

  // determine whether the user has logged in
  const hasToken = getToken()
  // console.log('token',hasToken)
  if (hasToken) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          // await store.dispatch("user/getInfo")
          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch("user/resetToken")
          Message.error(error || "Has Error")
          // next(`/login?redirect=${to.path}`)
          next(`/login`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    // eslint-disable-next-line no-lonely-if
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      // next(`/login?redirect=${to.path}`)
      next(`/login`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

