<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldChange"
    ></i>
    <span>header</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false)

    const handleFoldChange = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }

    return {
      handleFoldChange,
      isFold
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
