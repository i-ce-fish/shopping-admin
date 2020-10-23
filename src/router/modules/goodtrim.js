import Layout from '@/layout'

const goodtrimRouter = {
  path: '/goodtrim',
  name: 'goodtrim',
  redirect: '/goodtrim/index',
  component: Layout,
  children: [{
    path: 'index',
    name: 'index',
    component: () => import('@/views/goodtrim/index'),
    meta: { title: '面料后整理' }
  }, {
    path: 'edit',
    component: () => import('@/views/goodtrim/edit'),
    hidden: true,
    meta: { title: '修改面料后整理' }
  },
  {
    path: 'add',
    component: () => import('@/views/goodtrim/add'),
    hidden: true,
    meta: { title: '添加面料后整理' }
  }
  ]
}

export default goodtrimRouter
