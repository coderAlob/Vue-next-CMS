import { createApp } from "vue"
import App from "./App.vue"

//导入初始化css样式
import "normalize.css"
import "./assets/css/index.css"

//导入注册文件
import { registerApp } from "./global/index"

// 网络请求文件
import alobRequest from "./network/index"
// axios的基本使用案例
// import "./network/axios-demo"

//导入router、store
import router from "./router"
import store from "./store"

const app = createApp(App)
app.use(registerApp)
app.use(router)
app.use(store)
app.mount("#app")

alobRequest.request({
  url: "/home/multidata",
  method: "get"
})

//专有拦截器
// alobRequest.request({
//   url: "/home/multidata",
//   method: "get",
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log("request请求自带的请求拦截器")
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log("request请求自带的响应拦截器")
//       return res
//     }
//   }
// })
