import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
// import paperRouter from "./modules/paper"
import articleRouter from './modules/article'
import catalogRouter from './modules/catalog'
import customerRouter from './modules/customer'
import goodRouter from './modules/good'
import goodsizeRouter from './modules/goodsize'
import goodcolorRouter from './modules/goodcolor'
import addressRouter from './modules/address'
import goodorderRouter from './modules/goodorder'
import orderitemRouter from './modules/orderitem'
import categoryRouter from './modules/category'
import colorRouter from './modules/color'
import patternRouter from './modules/pattern'
import materialRouter from './modules/material'
import supplyRouter from './modules/supply'
import goodbrandRouter from './modules/goodbrand'
import testRouter from './modules/test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/Home'),
      meta: {
        title: '首页',
        icon: 'el-icon-house'
      }

    }
    ]

  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register')
  },
  testRouter,
  goodsizeRouter,
  goodbrandRouter,
  articleRouter,
  goodRouter,
  // customerRouter,
  // goodcolorRouter,
  // addressRouter,
  // goodorderRouter,
  // orderitemRouter,
  // categoryRouter,
  // colorRouter,
  // materialRouter,
  // patternRouter,
  // supplyRouter,
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: () => import('@/views/Test')
  // },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/test/index',
    component: () => import('@/views/test/index')
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  routes
})

export default router
