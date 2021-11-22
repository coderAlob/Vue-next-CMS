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
      @handleEditClick="handleEdit"
      @handleNewClick="handleNew"
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
    <model-page
      :modelConfig="modelConfig"
      ref="modelPageRef"
      :defaultInfo="defaultInfo"
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
  name: "user",
  components: {
    SearchPage,
    ContentPage,
    ModelPage
  },
  setup() {
    const [contentPageRef, handleReset, handleQuery] = usePageSearch()

    //页面单独的逻辑，根据是否有isHidden属性对单独的组件进行控制
    const newCB = () => {
      const passwordItem = modelConfig.formItems.find(
        (item) => item.field === "password"
      )
      passwordItem!.isHidden = false
    }
    const editCB = () => {
      const passwordItem = modelConfig.formItems.find(
        (item) => item.field === "password"
      )
      passwordItem!.isHidden = true
    }

    const [modelPageRef, handleNew, handleEdit, defaultInfo] = usePageModel(
      newCB,
      editCB
    )

    return {
      searchFormConfig,
      contentConfig,
      handleReset,
      handleQuery,
      contentPageRef,
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
