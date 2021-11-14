<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldChange"
    ></i>
    <div class="content">
      <nav-bread-crumb :breadCrumbs="breadCrumbs"></nav-bread-crumb>
      <nav-user-info></nav-user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"

//导入子组件
import NavUserInfo from "./Nav-user-info.vue"
import NavBreadCrumb from "@/base-ui/breadCrumb"

import { useStore } from "vuex"
import { useRoute } from "vue-router"

import { BreadCrumb } from "@/base-ui/breadCrumb/types"

import { pathMapToBreadCrumbs } from "@/utils/map-menu"

export default defineComponent({
  components: {
    NavUserInfo,
    NavBreadCrumb
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false)

    const store = useStore()

    const breadCrumbs = computed(() => {
      const userMenu = computed(() => store.state.loginModule.userMenu)

      const route = useRoute()
      const currentPath = route.path
      return pathMapToBreadCrumbs(userMenu.value, currentPath)
    })

    const handleFoldChange = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }

    return {
      handleFoldChange,
      isFold,
      breadCrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }
}
</style>
