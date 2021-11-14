<template>
  <div class="user">
    <div class="search">
      <search-form v-bind="searchFormConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import SearchForm, { Form } from "@/base-ui/form"

import { searchFormConfig } from "./config/search.config"

export default defineComponent({
  name: "user",
  components: {
    SearchForm
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
