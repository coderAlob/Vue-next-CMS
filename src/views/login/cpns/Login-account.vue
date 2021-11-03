<template>
  <div class="login-account">
    <el-form
      label-width="70px"
      :rules="accountRules"
      :model="account"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" placeholder="输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          placeholder="输入密码"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { accountRules } from "../config/account-config"

import { ElForm } from "element-plus"

import localCache from "@/utils/cache"

export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? ""
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            //设置本地缓存
            console.log(isKeepPassword)

            localCache.setCache("name", account.name)
            localCache.setCache("password", account.password)
          } else {
            localCache.clearCache()
          }
        }
      })
    }

    return {
      account,
      accountRules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped>
.login-account {
  margin-right: 10px;
}
</style>
