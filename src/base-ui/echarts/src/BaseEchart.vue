<template>
  <div class="base-echart">
    <div
      ref="echartDivRef"
      :style="{
        width: width,
        height: height
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
//导入echarts
import * as echarts from "echarts"

//导入API函数
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue"

import useEchart from "../hooks/useEchart"

//定义props
//可传入类型，且这些属性默认为必传的props
// defineProps<{
//   width?: string
//   height?: string
// }>()
//定义带有默认值的props
//withDefaults方法会将带有默认值的prop最为返回值返回
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: echarts.EChartsOption
  }>(),
  {
    width: "100%",
    height: "360px"
  }
)

//获取dom元素
const echartDivRef = ref<HTMLElement>()

//执行setup函数时，组件还未被挂载，使用声明周期函数进行执行时机的调整
onMounted(() => {
  //初始化echarts并获取实例对象
  const { setOptions } = useEchart(echartDivRef.value!)

  //使用watchEffect函数，对传入的配置进行侦听，如果传入的配置信息发生改变，就重新调用setOptions函数
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
