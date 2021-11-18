<template>
  <div class="department">
    <content-page
      :contentConfig="contentConfig"
      :pageName="'department'"
    ></content-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import ContentPage from "@/components/content-page"

import { contentConfig } from "./config/content.config"

export default defineComponent({
  name: "department",
  components: {
    ContentPage
  },
  setup() {
    return {
      contentConfig
    }
  }
})
</script>

<style scoped></style>
