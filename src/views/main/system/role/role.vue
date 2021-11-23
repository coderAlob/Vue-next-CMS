<template>
  <div class="role">
    <search-form
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleReset"
      @queryBtnClick="handleQuery"
    />
    <content-page
      ref="contentPageRef"
      :contentConfig="contentConfig"
      :pageName="'role'"
      @handleNewClick="handleNew"
      @handleEditClick="handleEdit"
    ></content-page>
    <model-page
      :modelConfig="modelConfig"
      :pageName="'role'"
      :defaultInfo="defaultInfo"
      ref="modelPageRef"
      :otherInfo="otherInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        ></el-tree>
      </div>
    </model-page>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from "vue"

import { useStore } from "@/store"

import SearchForm from "@/components/search-page"
import ContentPage from "@/components/content-page"
import ModelPage from "@/components/model-page"
import { ElTree } from "element-plus"

import { searchFormConfig } from "./config/search.config"
import { contentConfig } from "./config/content.config"
import { modelConfig } from "./config/model.config"

import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModel } from "@/hooks/usePageModel"

import { mapMenuLeftKeys } from "@/utils/map-menu"

export default defineComponent({
  name: "role",
  components: {
    SearchForm,
    ContentPage,
    ModelPage
  },
  setup() {
    const [contentPageRef, handleReset, handleQuery] = usePageSearch()

    //处理点击编辑按钮时，el-tree的默认数据
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCB = (item: any) => {
      nextTick(() => {
        const leafKeys = mapMenuLeftKeys(item.menuList)
        elTreeRef.value?.setCheckedKeys(leafKeys, true)
      })
    }

    const [modelPageRef, handleNew, handleEdit, defaultInfo] = usePageModel(
      undefined,
      editCB
    )

    const store = useStore()

    const menus = computed(() => store.state.entireMenu)

    //将el-tree中的数据保存
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys

      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    return {
      contentConfig,
      searchFormConfig,
      contentPageRef,
      handleReset,
      handleQuery,
      modelConfig,
      modelPageRef,
      handleNew,
      handleEdit,
      defaultInfo,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
