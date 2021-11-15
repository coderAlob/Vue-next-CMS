<template>
  <div class="search-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <!-- 根据type属性渲染不同组件 -->
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-model="formDate[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  v-model="formDate[`${item.field}`]"
                  :placeholder="item.placeholder"
                >
                  <template v-for="option in item.options" :key="option.title">
                    <el-option :value="option.value">
                      {{ option.title }}
                    </el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datePicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formDate[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue"

import { FormItem } from "@/base-ui/form/types"

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<FormItem[]>,
      default: () => []
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: "10px 40px" })
    },
    labelWidth: {
      type: String,
      default: "100px"
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 8,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    //如果直接使用props.modelValue实际上还是引用原对象，会对父组件传来的数据进行直接修改，而使用三点运算符则是重新生成一个对象对其进行保存
    const formDate = ref({ ...props.modelValue })

    //对保存下来的数据进行监听，如果被修改则发送emit事件，通知父组件修改状态
    watch(
      formDate,
      (newValue) => {
        emit("update:modelValue", newValue)
      },
      {
        deep: true
      }
    )

    return {
      formDate
    }
  }
})
</script>

<style scoped>
.search-form {
  padding-top: 22px;
}
</style>
