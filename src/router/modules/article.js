import Layout from '@/layout'

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
    path: 'time-table',
    component: () => import('@/views/article/time-table/index'),
    meta: {
      title: '时间表',
      icon: 'el-icon-s-operation'

    }
  }
  ]
}

export default articleRouter
