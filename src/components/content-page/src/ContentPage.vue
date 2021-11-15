<template>
  <div class="content-page">
    <user-list
      :listData="userList"
      v-bind="contentConfig"
      :userCount="userCount"
    >
      <!-- list的header -->
      <template #headerHandler>
        <el-button size="mini" type="primary">创建用户</el-button>
      </template>

      <!-- table的主体 -->
      <template #status="scope">
        <el-button
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          size="mini"
        >
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #createAt="scope">
        <strong> {{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong> {{ $filters.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <template #handler>
        <el-button icon="el-icon-edit" size="mini" type="text">
          编辑
        </el-button>
        <el-button icon="el-icon-delete" size="mini" type="text">
          删除
        </el-button>
      </template>
    </user-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"

import UserList from "@/base-ui/list"

export default defineComponent({
  props: {
    contentConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    UserList
  },
  setup() {
    const store = useStore()

    //进入页面时进行状态分发，执行网络请求
    store.dispatch("systemModule/getPageListAction", {
      pageUrl: "/users/list",
      //传入参数
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.systemModule.userList)
    const userCount = computed(() => store.state.systemModule.userCount)

    return {
      userList,
      userCount
    }
  }
})
</script>

<style scoped>
.content-page {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
