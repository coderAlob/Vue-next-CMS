import { Module } from "vuex"
import { RootState } from "../types"
import { LoginState } from "./login-types"
import router from "@/router"

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from "@/network/login/login"
import { Account } from "@/network/login/types"

//导入自定义方法
import localCache from "@/utils/cache"
import { mapMenuToRoutes, mapMenuToPermissions } from "@/utils/map-menu"

//Module类型必须传入两个泛型参数，  第一个为当前模块使用的类型，第二个为根模块使用的类型
const loginModule: Module<LoginState, RootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenu: [],
      userPermissions: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu: any) {
      state.userMenu = userMenu

      //根据当前的userMenu进行路由的动态映射
      const routes = mapMenuToRoutes(userMenu)

      routes.forEach((route) => {
        router.addRoute("main", route)
      })

      //每次menu进行改变时就重新获取一次按钮权限
      const permissions = mapMenuToPermissions(userMenu)
      state.userPermissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: Account) {
      //1.登录验证
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      //将token添加到本地缓存中
      localCache.setCache("token", token)
      //将token信息保存到state中
      commit("changeToken", token)

      //2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      //将用户信息保存到state中
      commit("changeUserInfo", userInfo)
      //将用户信息也添加到本地缓存中
      localCache.setCache("userInfo", userInfo)

      //3. 请求用户菜单
      const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenu = userMenuResult.data
      //将用户菜单保存到state中
      commit("changeUserMenu", userMenu)
      //将用户菜单保存到本地缓存中
      localCache.setCache("userMenu", userMenu)

      //4.跳转至首页
      router.push("/main")
    },
    phoneLoginAction({ commit }, payload) {
      console.log("手机登录验证", payload)
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenu = localCache.getCache("userMenu")
      if (userMenu) {
        commit("changeUserMenu", userMenu)
      }
    }
  }
}

export default loginModule
