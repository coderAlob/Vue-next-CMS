import * as echarts from "echarts"

//默认情况系统无法识别json模块，需要在垫片文件中对json模块进行声明
import chinaMapData from "@/components/echarts/mapEchart/data/china.json"
//对地图进行注册
echarts.registerMap("china", chinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener("resize", () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
