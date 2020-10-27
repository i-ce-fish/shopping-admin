import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import goodpatternRouter from '@/router/modules/goodpattern'
import goodtrimRouter from '@/router/modules/goodtrim'
import articleRouter from './modules/article'
import goodRouter from './modules/good'
import goodsizeRouter from './modules/goodsize'
import categoryRouter from './modules/category'
import supplyRouter from './modules/supply'
import goodbrandRouter from './modules/goodbrand'
import testRouter from './modules/test'
import goodfabricRouter from './modules/goodfabric'
import goodtextureRouter from './modules/goodtexture'
import supplierinfoRouter from './modules/supplierinfo'
import supplierorderRouter from './modules/supplierorder'

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
  categoryRouter,
  // colorRouter,
  // materialRouter,
  // patternRouter,
  // supplyRouter,

  goodpatternRouter,
  goodfabricRouter,
  goodtextureRouter,
  goodtrimRouter,
  supplierinfoRouter,
  supplierorderRouter,
  {
    path: '/demo',
    name: 'test',
    component: () => import('@/views/Test')
  },
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
