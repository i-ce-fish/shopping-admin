import Layout from '@/layout/index'

const goodpatternRouter = {
  path: '/goodpattern',
  name: 'goodpattern',
  redirect: '/goodpattern/index',
  component: Layout,
  meta: { title: '图案管理' },
  children: [{
    path: 'index',
    name: 'index',
    component: () => import('@/views/goodpattern/index'),
    meta: {
      title: '一级图案名称管理',
      icon: 'tree'
    }
  }, {
    path: 'edit',
    component: () => import('@/views/goodpattern/edit'),
    hidden: true,
    meta: { title: '修改一级图案名称' }
  },
  {
    path: 'add',
    component: () => import('@/views/goodpattern/add'),
    hidden: true,
    meta: { title: '添加一级图案名称' }
  },
  {
    path: 'children',
    name: 'children',
    component: () => import('@/views/goodpattern/index'),
    meta: {
      title: '二级图案名称管理',
      icon: 'tree',
      children: true
    }
  }, {
    path: 'children/edit',
    component: () => import('@/views/goodpattern/edit'),
    hidden: true,
    meta: {
      title: '修改二级图案名称',
      children: true
    }
  },
  {
    path: 'children/add',
    component: () => import('@/views/goodpattern/add'),
    hidden: true,
    meta: {
      title: '添加二级图案名称',
      children: true
    }
  }
  ]
}

//
// const articleRouter = {
//   path: '/article',
//   name: 'article',
//   redirect: '/article/index',
//   component: Layout,
//   meta: {
//     title: '听老板娘说',
//     icon: 'el-icon-s-operation'
//   },
//   children: [{
//     path: 'index',
//     name: 'index',
//     component: () => import('@/views/article/index'),
//     meta: {
//       title: '听老板娘说',
//       icon: 'el-icon-s-operation'
//     }
//   }, {
//     path: 'edit',
//     component: () => import('@/views/article/edit'),
//     hidden: true,
//     meta: {
//       title: '修改推文',
//       icon: 'el-icon-s-operation'
//     }
//
//   },
//     {
//       path: 'add',
//       component: () => import('@/views/article/add'),
//       hidden: true,
//       meta: {
//         title: '添加推文',
//         icon: 'el-icon-s-operation'
//       }
//     },
//     // extral
//     {
//       path: 'catalog',
//       name: 'catalog',
//       component: () => import('@/views/catalog/index'),
//       meta: {
//         title: '栏目管理',
//         icon: 'tree'
//       }
//     }, {
//       path: 'catalog/edit',
//       component: () => import('@/views/catalog/edit'),
//       hidden: true,
//       meta: { title: '修改栏目' }
//     },
//     {
//       path: 'catalog/add',
//       component: () => import('@/views/catalog/add'),
//       hidden: true,
//       meta: { title: '添加栏目' }
//     }
//   ]
// }

export default goodpatternRouter
