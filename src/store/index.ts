import { createStore } from "vuex"

import RootState from "./type"

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

export default store
