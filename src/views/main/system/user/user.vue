<template>
  <div class="user">
    <search-page :searchFormConfig="searchFormConfig"></search-page>
    <content-page :contentConfig="contentConfig"></content-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import SearchPage from "@/components/search-page"
import ContentPage from "@/components/content-page"

import { searchFormConfig } from "./config/search.config"
import { contentConfig } from "./config/content.config"

export default defineComponent({
  name: "user",
  components: {
    SearchPage,
    ContentPage
  },
  setup() {
    return {
      searchFormConfig,
      contentConfig
    }
  }
})
</script>

<style scoped></style>
