import { createStore, useStore as useVuexStore, Store } from "vuex"

import { RootState, StoreType } from "./types"

//导入子模块
import loginModule from "./login/login"
import systemModule from "./main/system/system"
import dashboardModule from "./main/analysis/dashboard"

//导入方法
import { getPageListData } from "@/network/main/system/system"

const store = createStore<RootState>({
  state: () => {
    return {
      name: "Alob",
      age: 18,
      entireDeparment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDeparment(state, list) {
      state.entireDeparment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      //1. 请求部门和角色的所有数据
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      //请求完整的权限数据
      const menuResult = await getPageListData("/menu/list", [])
      const { list: menuList } = menuResult.data

      //提交给mutation将数据保存在vuex中
      commit("changeEntireDeparment", departmentList)
      commit("changeEntireRole", roleList)
      commit("changeEntireMenu", menuList)
    }
  },
  modules: {
    loginModule,
    systemModule,
    dashboardModule
  }
})

export function setupStore() {
  store.dispatch("loginModule/loadLocalLogin")
}

export function useStore(): Store<StoreType> {
  return useVuexStore()
}

export default store
