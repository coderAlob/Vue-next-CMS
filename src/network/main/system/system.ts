import alobRequest from "@/network"
import { SystemResult } from "../types"

export function getPageListData(url: string, queryInfo: any) {
  return alobRequest.post<SystemResult>({
    url: url,
    data: queryInfo
  })
}
