import { RootState } from "@/store/types"
import { DashboardState } from "./types"
import { Module } from "vuex"

//导入网络请求方法
import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from "@/network/main/analysis/dashboard"

const dashboardModule: Module<DashboardState, RootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, result) {
      state.categoryGoodsCount = result
    },
    changeCategoryGoodsSale(state, result) {
      state.categoryGoodsSale = result
    },
    changeCategoryGoodsFavor(state, result) {
      state.categoryGoodsFavor = result
    },
    changeAddressGoodsSale(state, result) {
      state.addressGoodsSale = result
    }
  },
  actions: {
    //发送网络请求，获取相应数据
    async getDashboardData({ commit }) {
      //执行相应的数据请求方法
      const categoryGoodsCountResult = await getCategoryGoodsCount()
      const categoryGoodsSaleResult = await getCategoryGoodsSale()
      const categoryGoodsFavorResult = await getCategoryGoodsFavor()
      const addressGoodsSaleResult = await getAddressGoodsSale()

      //将请求到的数据保存到当前模块的vuex中进行保存
      commit("changeCategoryGoodsCount", categoryGoodsCountResult.data)
      commit("changeCategoryGoodsSale", categoryGoodsSaleResult.data)
      commit("changeCategoryGoodsFavor", categoryGoodsFavorResult.data)
      commit("changeAddressGoodsSale", addressGoodsSaleResult.data)
    }
  }
}

export default dashboardModule
