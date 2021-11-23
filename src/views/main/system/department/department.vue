<template>
  <div class="department">
    <content-page
      :contentConfig="contentConfig"
      :pageName="'department'"
      @handleEditClick="handleEdit"
      @handleNewClick="handleNew"
    ></content-page>
    <model-page
      :pageName="'department'"
      :defaultInfo="defaultInfo"
      :modelConfig="modelConfig"
      ref="modelPageRef"
    ></model-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import ContentPage from "@/components/content-page"
import ModelPage from "@/components/model-page"

import { contentConfig } from "./config/content.config"
import { modelConfig } from "./config/model.config"

import { usePageModel } from "@/hooks/usePageModel"

export default defineComponent({
  name: "department",
  components: {
    ContentPage,
    ModelPage
  },
  setup() {
    const [modelPageRef, handleNew, handleEdit, defaultInfo] = usePageModel()

    return {
      contentConfig,
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
