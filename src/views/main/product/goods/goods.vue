<template>
  <div class="goods">
    <search-form
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleReset"
      @queryBtnClick="handleQuery"
    ></search-form>
    <content-page
      :contentConfig="contentConfig"
      pageName="goods"
      ref="contentPageRef"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">{{ "￥" + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ "￥" + scope.row.newPrice }}</template>
      <template #status="scope">
        <el-button
          plain
          :type="scope.row.status ? 'success' : 'danger'"
          size="mini"
        >
          {{ scope.row.status ? "上架" : "下架" }}
        </el-button>
      </template>
    </content-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import SearchForm from "@/components/search-page"
import ContentPage from "@/components/content-page"

import { searchFormConfig } from "./config/search.config"
import { contentConfig } from "./config/content.config"

import { usePageSearch } from "@/hooks/usePageSearch"

export default defineComponent({
  name: "goods",
  components: {
    ContentPage,
    SearchForm
  },
  setup() {
    const [contentPageRef, handleReset, handleQuery] = usePageSearch()
    return {
      contentConfig,
      searchFormConfig,
      contentPageRef,
      handleReset,
      handleQuery
    }
  }
})
</script>

<style scoped></style>
