<template>
  <div class="content-page">
    <user-list
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentConfig"
      v-model:page="pageInfo"
    >
      <!-- list的header -->
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          size="mini"
          type="primary"
          @click="handleNewClick"
        >
          创建
        </el-button>
      </template>

      <!-- table的主体 -->
      <template #createAt="scope">
        <strong> {{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong> {{ $filters.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <template #handler="scope">
        <el-button
          v-if="isUpdate"
          icon="el-icon-edit"
          size="mini"
          type="text"
          @click="handleEditClick(scope.row)"
        >
          编辑
        </el-button>
        <el-button
          v-if="isDelete"
          icon="el-icon-delete"
          size="mini"
          type="text"
          @click="handleDeleteClick(scope.row)"
        >
          删除
        </el-button>
      </template>
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </user-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue"
import { useStore } from "@/store"

import { usePermission } from "@/hooks/use-permission"

import UserList from "@/base-ui/list"

export default defineComponent({
  props: {
    contentConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    UserList
  },
  emits: ["handleNewClick", "handleEditClick"],
  setup(props, { emit }) {
    const store = useStore()

    const isCreate = usePermission(props.pageName, "create")
    const isUpdate = usePermission(props.pageName, "update")
    const isDelete = usePermission(props.pageName, "detele")
    const isQuery = usePermission(props.pageName, "query")

    //设置页面信息
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    //对pageInfo进行侦听,如果发生改变则重新发送网络请求
    watch(pageInfo, () => getPageDate())

    //发送网络请求
    const getPageDate = (queryInfo: any = {}) => {
      //判断是否具有查询权限
      if (!isQuery) return
      //进入页面时进行状态分发，执行网络请求
      store.dispatch("systemModule/getPageListAction", {
        pageName: props.pageName,
        //传入参数
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          //对传入的数据进行拼接
          ...queryInfo
        }
      })
    }
    getPageDate()

    //从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`systemModule/getListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`systemModule/getListCount`](props.pageName)
    )

    //获取其它的动态插槽
    const otherPropSlots = props.contentConfig.propsList.filter((item: any) => {
      if (item.slotName === "createAt") return false
      if (item.slotName === "updateAt") return false
      if (item.slotName === "handler") return false
      return true
    })

    //删除/编辑/新建等操作
    const handleDeleteClick = (item: any) => {
      store.dispatch("systemModule/deletePageDataAction", {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit("handleNewClick")
    }
    const handleEditClick = (item: any) => {
      emit("handleEditClick", item)
    }

    return {
      dataList,
      dataCount,
      getPageDate,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style scoped>
.content-page {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
