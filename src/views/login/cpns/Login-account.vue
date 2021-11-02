<template>
  <div class="login-account">
    <el-form label-width="70px" :rules="accountRules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" placeholder="输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" placeholder="输入密码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { accountRules } from "../config/account-config"

export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: ""
    })

    return {
      account,
      accountRules
    }
  }
})
</script>

<style scoped>
.login-account {
  margin-right: 10px;
}
</style>
