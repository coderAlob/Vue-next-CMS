import { createStore, useStore as useVuexStore, Store } from "vuex"

import { RootState, StoreType } from "./type"

import loginModule from "./login/login"

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
    loginModule
  }
})

export function setupStore() {
  store.dispatch("loginModule/loadLocalLogin")
}

export function useStore(): Store<StoreType> {
  return useVuexStore()
}

export default store
