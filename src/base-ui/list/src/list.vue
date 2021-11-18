<template>
  <div class="user-list">
    <div class="header">
      <slot name="header">
        <div class="title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      style="width: 100%"
      border
      v-bind="childrenProps"
    >
      <!-- 选中框列 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="40"
      ></el-table-column>

      <!-- 序号列 -->
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        width="80"
        align="center"
        label="序号"
      ></el-table-column>
      <template v-for="propItem in propsList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <!-- row:将这一行的数据传递出去 -->
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :currentPage="page.currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    propsList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      required: true
    },
    page: {
      type: Object,
      default: () => {
        return {
          currentPage: 0,
          pageSize: 10
        }
      }
    },
    childrenProps: {
      type: Object,
      default: () => ({ rowKey: "", treeProp: {} })
    }
  },
  emits: ["update:page"],
  setup(props, { emit }) {
    const handleSizeChange = (pageSize: number) => {
      emit("update:page", { ...props.page, pageSize })
    }

    const handleCurrentChange = (currentPage: number) => {
      emit("update:page", { ...props.page, currentPage })
    }

    return {
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
