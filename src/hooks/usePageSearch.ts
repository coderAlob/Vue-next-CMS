import { ref } from "vue"
import ContentPage from "@/components/content-page"

export function usePageSearch() {
  //获取contentPage组件
  const contentPageRef = ref<InstanceType<typeof ContentPage>>()
  //点击重置按钮，重新发送网络请求，请求原始数据
  const handleReset = () => {
    contentPageRef.value?.getPageDate()
  }

  const handleQuery = (queryInfo: any) => {
    contentPageRef.value?.getPageDate(queryInfo)
  }

  //使用元组的形式进行返回
  return [contentPageRef, handleReset, handleQuery]
}
