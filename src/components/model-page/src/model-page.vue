<template>
  <div class="model-page">
    <el-dialog
      title="新建"
      v-model="dialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <search-form v-bind="modelConfig" v-model="formData"></search-form>
      <!-- 预留插槽编写页面单独的功能 -->
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import { useStore } from "@/store"

import SearchForm from "@/base-ui/form"

export default defineComponent({
  props: {
    modelConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    SearchForm
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modelConfig.formItems) {
          console.log(newValue)

          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    //点击确定按钮的操作
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      //根据defaultInfo是否为空判断是编辑操作还是创建操作
      if (Object.keys(props.defaultInfo).length) {
        //编辑操作
        store.dispatch("systemModule/editPageDataAction", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        //新建操作
        store.dispatch("systemModule/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
