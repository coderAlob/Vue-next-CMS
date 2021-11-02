import { AxiosRequestConfig, AxiosResponse } from "axios"
export interface AlobInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface AlobRequestConfig extends AxiosRequestConfig {
  interceptors?: AlobInterceptors
}
