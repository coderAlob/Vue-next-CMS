<template>
  <div class="menu">
    <content-page
      :contentConfig="contentConfig"
      :pageName="'menu'"
    ></content-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import ContentPage from "@/components/content-page"

import { contentConfig } from "./config/content.config"
export default defineComponent({
  name: "system-menu",
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
