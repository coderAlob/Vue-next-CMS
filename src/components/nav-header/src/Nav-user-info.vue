<template>
  <div class="user-info">
    <div class="button">
      <el-icon class="el-icon-chat-dot-round icons"></el-icon>
      <el-icon class="el-icon-collection-tag icons"></el-icon>
      <el-icon class="el-icon-bell icons"></el-icon>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://avatars.githubusercontent.com/u/84321713?v=4"
        ></el-avatar>
        <span class="user-name">{{ name }}</span>
        <el-icon class="el-icon-caret-bottom"></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-collection"
            >个人中心</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-goblet">会员中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">账号设置</el-dropdown-item>
          <el-dropdown-item divided icon="el-icon-circle-close"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.name)
    return {
      name
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  align-items: center;

  .button {
    font-size: 20px;
    .icons {
      margin: 0 5px;
      cursor: pointer;
    }
    .icons:hover {
      color: rgba(97, 144, 231, 0.932);
    }
    margin-right: 5px;
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;

    .user-name {
      padding: 0 5px 0 10px;
    }
  }
}
</style>
