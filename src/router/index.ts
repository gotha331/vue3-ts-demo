import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 为路由增加额外配置项: 不生效
// export type AppRouteRecordRow = RouteRecordRaw & {
//   hidden?: boolean
// }

const routes = [
  {
    path: '/',
    component: () => import("../views/Home.vue"),
    meta: {
      title: '待办列表',
      icon: 'el-icon-document'
    },
  },
  {
    path: '/add',
    // hidden: true,
    component: () => import("../views/AddTodo.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  // 

})

export default router


