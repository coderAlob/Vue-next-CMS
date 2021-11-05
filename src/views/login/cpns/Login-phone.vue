<template>
  <div class="login-phone">
    <el-form
      label-width="70px"
      :rules="phoneRules"
      :model="phone"
      ref="phoneFormRef"
    >
      <el-form-item label="手机号" prop="num">
        <el-input
          v-model="phone.num"
          placeholder="输入11位数字手机号码"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" placeholder="输入验证码"></el-input>
          <el-button type="primary" class="get-code-btn" size="mini"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { phoneRules } from "../config/phone-config"
import { ElForm } from "element-plus"

import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const phoneFormRef = ref<InstanceType<typeof ElForm>>()
    const store = useStore()

    const phone = reactive({
      num: "",
      code: ""
    })

    const phoneLoginAction = () => {
      console.log("手机登录验证")

      phoneFormRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch("loginModule/phoneLoginAction", { ...phone })
        }
      })
    }

    return {
      phone,
      phoneRules,
      phoneLoginAction,
      phoneFormRef
    }
  }
})
</script>

<style scoped>
.login-phone {
  margin-right: 10px;
}

.get-code {
  display: flex;
}
.get-code-btn {
  margin-left: 8px;
}
</style>
