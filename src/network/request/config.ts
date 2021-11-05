// 根据不同的开发环境设置不同的网络请求地址，及响应时间
let BASE_URL = ""
const TIME_OUT = 10000
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://152.136.185.210:5000"
} else if (process.env.NODE_ENV === "prod") {
  BASE_URL = "http://152.136.185.210:5000"
} else {
  BASE_URL = "http://152.136.185.210:5000"
}

export { BASE_URL, TIME_OUT }
