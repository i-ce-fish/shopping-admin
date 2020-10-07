import Layout from '@/layout'
import catalogRouter from '@/router/modules/catalog'

const articleRouter = {
  path: '/article',
  name: 'article',
  redirect: '/article/index',
  component: Layout,
  meta: {
    title: '听老板娘说',
    icon: 'el-icon-s-operation'
  },
  children: [{
    path: 'index',
    name: 'index',
    component: () => import('@/views/article/index'),
    meta: {
      title: '听老板娘说',
      icon: 'el-icon-s-operation'
    }
  }, {
    path: 'edit',
    component: () => import('@/views/article/edit'),
    hidden: true,
    meta: {
      title: '修改推文',
      icon: 'el-icon-s-operation'
    }

  },
  {
    path: 'add',
    component: () => import('@/views/article/add'),
    hidden: true,
    meta: {
      title: '添加推文',
      icon: 'el-icon-s-operation'
    }
  },
  // extral
  {
    path: 'catalog',
    name: 'catalog',
    component: () => import('@/views/catalog/index'),
    meta: {
      title: '栏目管理',
      icon: 'tree'
    }
  }, {
    path: 'catalog/edit',
    component: () => import('@/views/catalog/edit'),
    hidden: true,
    meta: { title: '修改栏目' }
  },
  {
    path: 'catalog/add',
    component: () => import('@/views/catalog/add'),
    hidden: true,
    meta: { title: '添加栏目' }
  }
  ]
}

export default articleRouter
