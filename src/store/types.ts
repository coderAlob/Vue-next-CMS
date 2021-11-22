import { SystemState } from "./main/system/types"
import { LoginState } from "./login/login-types"

export interface RootState {
  name: string
  age: number
  entireDeparment: any[]
  entireRole: any[]
}

export interface RootWithModule {
  loginModule: LoginState
  systemModule: SystemState
}

export type StoreType = RootState & RootWithModule
