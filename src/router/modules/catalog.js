import Layout from "@/layout"

const catalogRouter = {
  path: "/catalog",
  name: "catalog",
  redirect: "/catalog/index",
  component: Layout,
  children: [{
    path: "index",
    name: "index",
    component: () => import("@/views/catalog/index"),
    meta: {
      title: "听老板娘说栏目管理",
      icon: "tree"
    }
  }, {
    path: "edit",
    component: () => import("@/views/catalog/edit"),
    hidden: true,
    meta: { title: "修改听老板娘说栏目" }
  },
  {
    path: "add",
    component: () => import("@/views/catalog/add"),
    hidden: true,
    meta: { title: "添加听老板娘说栏目" }
  }
  ]
}

export default catalogRouter
