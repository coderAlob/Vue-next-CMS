import axios from "axios"
// 导入axios库中封装好的数据类型
import { AxiosInstance } from "axios"

//自定义接口：可传入拦截器的axios配置选项
import { AlobInterceptors, AlobRequestConfig } from "./type"

class AlobRequest {
  instance: AxiosInstance
  interceptors?: AlobInterceptors

  constructor(config: AlobRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //全局拦截器：该类被实例化后自带的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("实例自带的请求成功拦截器")
        return config
      },
      (err) => {
        console.log("实例自带的请求失败拦截器")
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log("实例自带的响应成功拦截器")
        return res
      },
      (err) => {
        console.log("实例自带的响应失败拦截器")
        return err
      }
    )
  }

  request(config: AlobRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
      return res
    })
  }
}

export default AlobRequest
