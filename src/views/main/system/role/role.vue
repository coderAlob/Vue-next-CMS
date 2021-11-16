<template>
  <div class="role">
    <search-form
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleReset"
      @queryBtnClick="handleQuery"
    />
    <content-page
      ref="contentRef"
      :contentConfig="contentConfig"
      :pageName="'role'"
    ></content-page>
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
  name: "role",
  components: {
    SearchForm,
    ContentPage
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
