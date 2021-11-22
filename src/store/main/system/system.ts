import { Module } from "vuex"
import { RootState } from "@/store/types"
import SystemState from "./types"

//网络请求方法
import {
  deletePageDataById,
  getPageListData,
  createPageData,
  editPageData
} from "@/network/main/system/system"

const systemModule: Module<SystemState, RootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0
    }
  },
  mutations: {
    changeUsersList(state, payload: any[]) {
      state.usersList = payload
    },
    changeUsersCount(state, payload: number) {
      state.usersCount = payload
    },
    changeRoleList(state, payload: any[]) {
      state.roleList = payload
    },
    changeRoleCount(state, payload: number) {
      state.roleCount = payload
    },
    changeGoodsList(state, payload: any[]) {
      state.goodsList = payload
    },
    changeGoodsCount(state, payload: number) {
      state.goodsCount = payload
    },
    changeMenuList(state, payload: any[]) {
      state.menuList = payload
    },
    changeMenuCount(state, payload: number) {
      state.menuCount = payload
    },
    changeDepartmentList(state, payload: any[]) {
      state.departmentList = payload
    },
    changeDepartmentCount(state, payload: number) {
      state.departmentCount = payload
    },
    changeCategoryList(state, payload: any[]) {
      state.categoryList = payload
    },
    changeCategoryCount(state, payload: number) {
      state.categoryCount = payload
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      //根据传递过来的pageName决定发送网络请求的URL
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      //发送网络请求并将请求的结果保存到本地
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data

      //将首字母大写后返回
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      //根据pageName和item的id拼接URL
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      //发送delete请求
      await deletePageDataById(pageUrl)

      //重新请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      //1. 编辑数据的请求
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)

      //修改之后请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      //1. 创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)

      //修改之后请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  },
  getters: {
    getListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    getListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  }
}

export default systemModule
