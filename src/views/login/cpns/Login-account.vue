<template>
  <div class="login-account">
    <el-form
      label-width="70px"
      :rules="accountRules"
      :model="account"
      ref="accountFormRef"
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
import { useStore } from "vuex"

import { ElForm } from "element-plus"

import localCache from "@/utils/cache"

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? ""
    })

    const accountFormRef = ref<InstanceType<typeof ElForm>>()

    const accountLoginAction = (isKeepPassword: boolean) => {
      accountFormRef.value?.validate((valid) => {
        if (valid) {
          //1.设置本地缓存
          if (isKeepPassword) {
            localCache.setCache("name", account.name)
            localCache.setCache("password", account.password)
          } else {
            localCache.clearCache()
          }

          //2.登录验证
          store.dispatch("loginModule/accountLoginAction", { ...account })
        }
      })
    }

    return {
      account,
      accountRules,
      accountLoginAction,
      accountFormRef
    }
  }
})
</script>

<style scoped>
.login-account {
  margin-right: 10px;
}
</style>
