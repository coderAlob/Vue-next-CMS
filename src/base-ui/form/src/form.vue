<template>
  <div class="search-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <!-- 根据type属性渲染不同组件 -->
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input :placeholder="item.placeholder" />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select style="width: 100%">
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
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

import { FormItem } from "@/base-ui/form/types"

export default defineComponent({
  props: {
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
  setup() {
    return {}
  }
})
</script>

<style scoped>
.search-form {
  padding-top: 22px;
}
</style>
