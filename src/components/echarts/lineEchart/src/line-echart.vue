<template>
  <div class="line-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import BaseEchart from "@/base-ui/echarts"

import { defineProps, computed } from "vue"

const props = defineProps<{
  xLabels: string[]
  values: any[]
  title?: string
}>()

const options = computed(() => ({
  title: {
    text: props.title
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985"
      }
    }
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: props.xLabels
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "分类商品的销量",
      type: "line",
      stack: "总量",
      areaStyle: {},
      emphasis: {
        focus: "series"
      },
      data: props.values
    }
  ]
}))
</script>

<style scoped></style>
