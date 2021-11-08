<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="210px">
        <NavMenu></NavMenu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">Header</el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import NavMenu from "@/components/nav-menu"

export default defineComponent({
  components: {
    NavMenu
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-container,
.page,
.el-aside {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}
.el-header {
  height: 48px !important;
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
