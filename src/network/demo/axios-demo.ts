// import axios from "axios"

import axios from "axios"

// //1.模拟get请求
// axios.get("http://152.136.185.210:7878/api/hy66/home/multidata").then((res) => {
//   console.log(res.data)
// })

// //2.模拟get请求并传入一些参数
// axios
//   .get("https://httpbin.org/get", {
//     params: {
//       name: "Alob",
//       age: "18"
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// //3. 模拟post请求
// axios
//   .post("https://httpbin.org/post", {
//     data: {
//       name: "alob"
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

//全局配置axios选项
axios.defaults.baseURL = "https://httpbin.org"
axios.defaults.timeout = 10000

//4. axios.all方法的使用
axios
  .all([
    axios.get("/get", { params: { name: "Alob", age: "18" } }),
    axios.post("/post", { data: { name: "alob" } })
  ])
  .then((res) => {
    console.log(res)
  })

// axios拦截器
//1. 请求拦截器
axios.interceptors.request.use(
  (config) => {
    console.log("请求成功")
    return config
  },
  (err) => {
    console.log("请求数据失败")
    return err
  }
)
//2. 响应拦截器
axios.interceptors.response.use(
  (res) => {
    console.log("数据已返回")
    return res.data
  },
  (err) => {
    console.log("数据获取失败")
    return err
  }
)
