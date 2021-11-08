import { LoginState } from "./login/login-types"

export interface RootState {
  name: string
  age: number
}

export interface RootWithModule {
  loginModule: LoginState
}

export type StoreType = RootState & RootWithModule
