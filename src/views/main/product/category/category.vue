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
    ></content-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import SearchPage from "@/components/search-page"
import ContentPage from "@/components/content-page"

import { searchFormConfig } from "./config/search.config"
import { contentConfig } from "./config/content.config"

import { usePageSearch } from "@/hooks/usePageSearch"

export default defineComponent({
  name: "category",
  components: {
    SearchPage,
    ContentPage
  },
  setup() {
    const [contentPageRef, handleReset, handleQuery] = usePageSearch()

    return {
      searchFormConfig,
      contentConfig,
      contentPageRef,
      handleReset,
      handleQuery
    }
  }
})
</script>

<style scoped></style>
