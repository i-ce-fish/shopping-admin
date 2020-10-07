import Layout from '@/layout'

const goodbrandRouter = {
  path: '/goodbrand',
  name: 'goodbrand',
  redirect: '/goodbrand/index',
  component: Layout,
  children: [{
    path: 'index',
    name: 'index',
    component: () => import('@/views/goodbrand/index'),
    meta: { title: '品牌管理', icon: 'tree' }
  }, {
    path: 'edit',
    component: () => import('@/views/goodbrand/edit'),
    hidden: true,
    meta: { title: '修改品牌' }
  },
  {
    path: 'add',
    component: () => import('@/views/goodbrand/add'),
    hidden: true,
    meta: { title: '添加品牌' }
  }
  ]
}

export default goodbrandRouter
