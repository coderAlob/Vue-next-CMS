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
      :modelConfig="modelConfigRef"
      ref="modelPageRef"
      :defaultInfo="defaultInfo"
      :pageName="'users'"
    ></model-page>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

import SearchPage from "@/components/search-page"
import ContentPage from "@/components/content-page"
import ModelPage from "@/components/model-page"

import { searchFormConfig } from "./config/search.config"
import { contentConfig } from "./config/content.config"
import { modelConfig } from "./config/model.config"

import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModel } from "@/hooks/usePageModel"
import { useStore } from "@/store"

export default defineComponent({
  name: "user",
  components: {
    SearchPage,
    ContentPage,
    ModelPage
  },
  setup() {
    const [contentPageRef, handleReset, handleQuery] = usePageSearch()

    //处理密码的逻辑
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

    //动态添加部门和角色
    const store = useStore()
    //如果刷新页面，setup函数不会进行再一次执行，因此，无法获取vuex中的数据，
    //通过使用computed API实现响应式，如果内部引用对象发生改变，则这个回调函数会被重新执行
    const modelConfigRef = computed(() => {
      //找到相应的配置对象
      const departmentItem = modelConfig.formItems.find(
        (item) => item.field === "departmentId"
      )
      const roleItem = modelConfig.formItems.find(
        (item) => item.field === "roleId"
      )

      //将vuex中的数据进行转化后赋值给配置对象
      departmentItem!.options = store.state.entireDeparment.map((item) => {
        return { title: item.name, value: item.id }
      })
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })

      return modelConfig
    })

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
      modelConfigRef,
      modelPageRef,
      handleNew,
      handleEdit,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
