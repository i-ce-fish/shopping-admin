
import Layout from "@/layout"

const paperRouter = {
  path: "/paper",
  name: "paper",
  redirect: "/paper/index",
  component: Layout,
  children: [{
    path: "index",
    name: "index",
    component: () => import("@/views/paper/index")
    // meta: { title: "论文管理", icon: "tree" }
  }, {
    path: "edit",
    component: () => import("@/views/paper/edit"),
    hidden: true
    // meta: { title: "修改论文" }
  },
  {
    path: "add",
    component: () => import("@/views/paper/add"),
    hidden: true
    // meta: { title: "添加用户" }
  }
  ]
}

export default paperRouter

