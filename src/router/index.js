import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "@/layout"
import paperRouter from "./modules/paper"
// import paperRouter from "./modules/paper"

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
      component: () => import("@/views/Home")
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
  paperRouter,
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
