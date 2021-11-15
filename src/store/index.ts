import { createStore, useStore as useVuexStore, Store } from "vuex"

import { RootState, StoreType } from "./types"

//导入子模块
import loginModule from "./login/login"
import systemModule from "./main/system/system"

const store = createStore<RootState>({
  state: () => {
    return {
      name: "Alob",
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule,
    systemModule
  }
})

export function setupStore() {
  store.dispatch("loginModule/loadLocalLogin")
}

export function useStore(): Store<StoreType> {
  return useVuexStore()
}

export default store
