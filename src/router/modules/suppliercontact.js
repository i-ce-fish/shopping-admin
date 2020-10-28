import Layout from '@/layout'

const suppliercontactRouter = {
  path: '/suppliercontact',
  name: 'suppliercontact',
  redirect: '/suppliercontact/index',
  component: Layout,
  children: [{
    path: 'index',
    name: 'index',
    component: () => import('@/views/suppliercontact/index'),
    meta: {
      title: '供货商通讯录管理',
      icon: 'tree'
    }
  }, {
    path: 'edit',
    component: () => import('@/views/suppliercontact/edit'),
    hidden: true,
    meta: { title: '修改供货商通讯录' }
  },
  {
    path: 'add',
    component: () => import('@/views/suppliercontact/add'),
    hidden: true,
    meta: { title: '添加供货商通讯录' }
  }
  ]
}

export default suppliercontactRouter
