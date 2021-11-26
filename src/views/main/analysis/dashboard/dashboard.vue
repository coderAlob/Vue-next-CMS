<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <alob-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </alob-card>
      </el-col>
      <el-col :span="10">
        <alob-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </alob-card>
      </el-col>
      <el-col :span="7">
        <alob-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </alob-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="centent-row">
      <el-col :span="12">
        <alob-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </alob-card>
      </el-col>
      <el-col :span="12">
        <alob-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </alob-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

import { useStore } from "@/store"

import AlobCard from "@/base-ui/card"
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from "@/components/echarts"

export default defineComponent({
  name: "dashboard",
  components: {
    AlobCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    //页面创建时发送网络请求请求相应的数据
    store.dispatch("dashboardModule/getDashboardData")

    //获取vuex中的数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsSale = store.state.dashboardModule.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }

      return {
        xLabels,
        values
      }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsFavor = store.state.dashboardModule.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }

      return {
        xLabels,
        values
      }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboardModule.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="less">
.centent-row {
  margin-top: 20px;
}
</style>
