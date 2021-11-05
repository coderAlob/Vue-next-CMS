import alobRequest from "../index"

import { Account, LoginResult, LoginResultData } from "./types"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/", //users/id
  UserMenu = "/role/" //用法role/id/menu
}

export function accountLoginRequest(account: Account) {
  return alobRequest.post<LoginResult<LoginResultData>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return alobRequest.get<LoginResult>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}
export function requestUserMenuByRoleId(id: number) {
  return alobRequest.get<LoginResult>({
    url: LoginAPI.UserMenu + id + "/menu",
    showLoading: false
  })
}
