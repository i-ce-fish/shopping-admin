import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "@/layout"
// import paperRouter from "./modules/paper"
import articleRouter from "./modules/article"
import catalogRouter from "./modules/catalog"
import customerRouter from "./modules/customer"
import goodRouter from "./modules/good"
import goodsizeRouter from "./modules/goodsize"
import goodcolorRouter from "./modules/goodcolor"
import addressRouter from "./modules/address"
import goodorderRouter from "./modules/goodorder"
import orderitemRouter from "./modules/orderitem"
import categoryRouter from "./modules/category"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/home",
    children: [{
      path: "home",
      name: "home",
      component: () => import("@/views/Home"),
      meta: {
        title: "首页",
        icon: "el-icon-house"
      }

    }
    ]

  },

  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register")
  },
  articleRouter,
  catalogRouter,
  customerRouter,
  goodRouter,
  goodsizeRouter,
  goodcolorRouter,
  addressRouter,
  goodorderRouter,
  orderitemRouter,
  categoryRouter,

  {
    path: "/test",
    name: "test",
    component: () => import("@/views/Test")
  }
//  todo 404
]

const router = new VueRouter({
  routes
})

export default router
