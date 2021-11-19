<template>
  <div class="search">
    <search-form v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="handle-btn">
          <el-button icon="el-icon-refresh" @click="handleResetClick">
            重置
          </el-button>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </search-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import SearchForm from "@/base-ui/form"

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    SearchForm
  },
  emits: ["resetBtnClick", "queryBtnClick"],
  setup(props, { emit }) {
    //通过逻辑分析：双向绑定的属性应该由配置文件的field属性所决定
    //优化一：formData中的属性应该是由配置文件传入的属性field动态决定的
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginItems: any = {}
    for (const item of formItems) {
      formOriginItems[item.field] = ""
    }
    const formData = ref(formOriginItems)

    //优化二：点击重置按钮，表单中的数据会清空
    const handleResetClick = () => {
      for (const key in formOriginItems) {
        // //内部是对传入的数据进行浅拷贝，可以通过修改内部属性来达到响应式的目的
        formData.value[key] = formOriginItems[key]
        //自定义事件，通知顶部页面调用contentPage中的网络请求方法重新发送网络请求
        emit("resetBtnClick")
      }
    }

    //优化三：点击搜索按钮，将表单数据作为条件发送网络请求并返回相应数据
    const handleQueryClick = () => {
      //自定义事件，通知顶部页面调用contentPage中的网络请求方法，根据提交的条件作为参数重新发送网络请求
      emit("queryBtnClick", formData.value)
      console.log(formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick,
      formOriginItems
    }
  }
})
</script>

<style scoped>
.handle-btn {
  text-align: right;
  padding: 0 40px 20px 0;
}
</style>
