<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" :stretch="true" v-model="currentTab">
      <el-tab-pane label="消息中心" name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号登录</span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane label="消息中心" name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>手机登录</span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import LoginAccount from "./Login-account.vue"
import LoginPhone from "./Login-phone.vue"

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    //1.属性的定义
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    let currentTab = ref("account")

    //方法的定义
    const handleLoginClick = () => {
      if (currentTab.value === "account") {
        accountRef.value?.accountLoginAction(isKeepPassword.value)
      } else {
        console.log(phoneRef.value)

        phoneRef.value?.phoneLoginAction()
      }
    }

    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      handleLoginClick,
      currentTab
    }
  }
})
</script>

<style scoped lang="css">
.login-panel {
  margin-bottom: 180px;
  width: 320px;
}
.login-panel .title {
  text-align: center;
}
.account-control {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
