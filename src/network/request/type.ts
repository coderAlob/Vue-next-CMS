import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface AlobInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface AlobRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: AlobInterceptors<T>
  showLoading?: boolean
}
