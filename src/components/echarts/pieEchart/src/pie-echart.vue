<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
//导入组件
import BaseEchart from "@/base-ui/echarts"

//导入API函数
import { defineProps, defineExpose, computed } from "vue"

//导入封装的数据类型
import { DataType } from "../types"

//设置props
const props = defineProps<{
  pieData: DataType[]
}>()

//图表配置信息的编写
//使用computed函数，将配置信息加入到响应式系统中
const options = computed(() => ({
  tooltip: {
    trigger: "item"
  },
  legend: {
    orient: "horizontal" //图例的展示方式，默认为horizontal水平展示，vertical为垂直
  },
  series: [
    {
      name: "分类数据",
      type: "pie",
      radius: "50%",
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
}))
</script>

<style scoped></style>
