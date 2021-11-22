import alobRequest from "@/network"
import { SystemResult } from "../types"

export function getPageListData(url: string, queryInfo: any) {
  return alobRequest.post<SystemResult>({
    url: url,
    data: queryInfo
  })
}

export function deletePageDataById(url: string) {
  return alobRequest.delete<SystemResult>({
    url: url
  })
}

export function editPageData(url: string, editData: any) {
  return alobRequest.patch<SystemResult>({
    url: url,
    data: editData
  })
}
export function createPageData(url: string, newData: any) {
  return alobRequest.post<SystemResult>({
    url: url,
    data: newData
  })
}
