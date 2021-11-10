import { setupStore } from "@/store"
import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import localCache from "@/utils/cache"

const routes: RouteRecordRaw[] = [
  //设置重定向为main页面
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("views/login/Login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("views/main/Main.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/not-found/NotFound.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

//使用全局导航守卫，监听如果跳转的页面不是登录页面，则对其进行检测是否带有token，如果没有则跳转至登录页面进行用户登录
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }
})

export default router
