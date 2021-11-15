<template>
  <div class="search">
    <search-form v-bind="searchFormConfig" v-model="formDate">
      <template #footer>
        <div class="handle-btn">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </search-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import SearchForm from "@/base-ui/form"

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    SearchForm
  },
  setup() {
    const formDate = ref({
      id: "",
      username: "",
      name: "",
      status: "",
      phone: "",
      datePicker: ""
    })

    return {
      formDate
    }
  }
})
</script>

<style scoped>
.handle-btn {
  text-align: right;
  padding: 0 40px 20px 0;
}
</style>
