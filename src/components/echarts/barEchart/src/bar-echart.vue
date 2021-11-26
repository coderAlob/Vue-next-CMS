<template>
  <div class="bar-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import BaseEchart from "@/base-ui/echarts"

import { defineProps, computed } from "vue"

import * as echarts from "echarts"

const props = defineProps<{
  title?: string
  xLabels: string[]
  values: []
}>()

const options = computed(() => ({
  title: {
    text: props.title
  },
  tooltip: {
    trigger: "item"
  },
  xAxis: {
    data: props.xLabels,
    axisLabel: {
      inside: true, // 使x轴的内容展示在柱子中
      color: "#fff"
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "#999"
    }
  },
  dataZoom: [
    {
      type: "inside"
    }
  ],
  series: [
    {
      type: "bar",
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#83bff6" },
          { offset: 0.5, color: "#188df0" },
          { offset: 1, color: "#188df0" }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#2378f7" },
            { offset: 0.7, color: "#2378f7" },
            { offset: 1, color: "#83bff6" }
          ])
        }
      },
      data: props.values
    }
  ]
}))
</script>

<style scoped></style>
