<template>
  <div class="category">
    <search-page
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleReset"
      @queryBtnClick="handleQuery"
    ></search-page>
    <content-page
      ref="contentPageRef"
      :contentConfig="contentConfig"
      :pageName="'category'"
      @handleNewClick="handleNew"
      @handleEditClick="handleEdit"
    ></content-page>
    <model-page
      :modelConfig="modelConfig"
      :defaultInfo="defaultInfo"
      :pageName="'category'"
      ref="modelPageRef"
    ></model-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import SearchPage from "@/components/search-page"
import ContentPage from "@/components/content-page"
import ModelPage from "@/components/model-page"

import { searchFormConfig } from "./config/search.config"
import { contentConfig } from "./config/content.config"
import { modelConfig } from "./config/model.config"

import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModel } from "@/hooks/usePageModel"

export default defineComponent({
  name: "category",
  components: {
    SearchPage,
    ContentPage,
    ModelPage
  },
  setup() {
    const [contentPageRef, handleReset, handleQuery] = usePageSearch()
    const [modelPageRef, handleNew, handleEdit, defaultInfo] = usePageModel()

    return {
      searchFormConfig,
      contentConfig,
      contentPageRef,
      handleReset,
      handleQuery,
      modelConfig,
      modelPageRef,
      handleNew,
      handleEdit,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
