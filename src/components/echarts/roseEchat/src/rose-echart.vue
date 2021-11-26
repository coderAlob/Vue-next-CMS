<template>
  <div class="rose-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import BaseEchart from "@/base-ui/echarts"

import { defineProps, computed } from "vue"

import { DataType } from "../types"

const props = defineProps<{
  roseData: DataType[]
}>()

const options = computed(() => ({
  tooltip: {
    trigger: "item"
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: "类别数据",
      type: "pie",
      radius: [20, 150],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8
      },
      data: props.roseData
    }
  ]
}))
</script>

<style scoped></style>
