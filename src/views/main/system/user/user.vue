<template>
  <div class="user">
    <search-page
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleReset"
      @queryBtnClick="handleQuery"
    />
    <content-page
      ref="contentPageRef"
      :contentConfig="contentConfig"
      :pageName="'users'"
    >
      <template #status="scope">
        <el-button
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          size="mini"
        >
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
    </content-page>
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
  name: "user",
  components: {
    SearchPage,
    ContentPage
  },
  setup() {
    const [contentPageRef, handleReset, handleQuery] = usePageSearch()

    return {
      searchFormConfig,
      contentConfig,
      handleReset,
      handleQuery,
      contentPageRef
    }
  }
})
</script>

<style scoped></style>
