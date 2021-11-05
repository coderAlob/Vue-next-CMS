import localCache from "@/utils/cache"
// 网络请求的同一出口文件
import AlobRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const alobRequest = new AlobRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache("token")
      //token检测，如果携带token，则将其写入header中，被浏览器识别
      if (token) {
        //新版本的axios将header的数据类型换成了AxiosRequestHeader类型 而低版本中的header类型为any
        //低版本给配置的header添加token
        // config.headers.Authorization = token
        config.headers = {
          Authorization: token
        }
      }

      return config
    }
  }
})

export default alobRequest
