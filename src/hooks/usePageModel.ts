import { ref } from "vue"
import ModelPage from "@/components/model-page"

type callBackFn = (item?: any) => void

export function usePageModel(newCB?: callBackFn, editCB?: callBackFn) {
  const modelPageRef = ref<InstanceType<typeof ModelPage>>()
  const defaultInfo = ref({})

  const handleNew = () => {
    defaultInfo.value = {}
    if (modelPageRef.value) {
      modelPageRef.value.dialogVisible = true
    }
    newCB && newCB()
  }
  const handleEdit = (item: any) => {
    defaultInfo.value = { ...item }

    if (modelPageRef.value) {
      modelPageRef.value.dialogVisible = true
    }
    editCB && editCB(item)
  }

  return [modelPageRef, handleNew, handleEdit, defaultInfo]
}
