<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <alob-card title="分类商品数量(饼图)"></alob-card>
      </el-col>
      <el-col :span="10">
        <alob-card title="不同城市商品销量"></alob-card>
      </el-col>
      <el-col :span="7">
        <alob-card title="分类商品数量(玫瑰图)"></alob-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="centent-row">
      <el-col :span="12">
        <alob-card title="分类商品的销量"></alob-card>
      </el-col>
      <el-col :span="12">
        <alob-card title="分类商品的收藏"></alob-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { useStore } from "@/store"

import AlobCard from "@/base-ui/card"

export default defineComponent({
  name: "dashboard",
  components: {
    AlobCard
  },
  setup() {
    const store = useStore()
    //页面创建时发送网络请求请求相应的数据
    store.dispatch("dashboardModule/getDashboardData")

    return {}
  }
})
</script>

<style scoped lang="less">
.centent-row {
  margin-top: 20px;
}
</style>
