//权限验证功能
import { useStore } from "@/store"

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.loginModule.userPermissions
  const verifyPermission = `system:${pageName}:${handleName}`
  console.log()

  return !!permissions.find((item) => {
    item === verifyPermission
    return true
  })
}
