// 网络请求的同一出口文件
import AlobRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const alobRequest = new AlobRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("请求成功拦截")
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log("请求失败拦截")
      return err
    },
    responseInterceptor: (res) => {
      console.log("响应成功拦截")
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log("响应失败拦截")
      return err
    }
  }
})

export default alobRequest
