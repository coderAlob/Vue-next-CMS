import { Module } from "vuex"
import { RootState } from "@/store/types"
import SystemState from "./types"

//网络请求方法
import { getPageListData } from "@/network/main/system/system"

const systemModule: Module<SystemState, RootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, payload: any[]) {
      state.userList = payload
    },
    changeUserCount(state, payload: number) {
      state.userCount = payload
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      //发送网络请求并将请求的结果保存到本地
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      const { list, totalCount } = pageResult.data

      //修改state中的userList属性
      commit("changeUserList", list)
      //修改state中的userCount
      commit("changeUserCount", totalCount)
    }
  }
}

export default systemModule
