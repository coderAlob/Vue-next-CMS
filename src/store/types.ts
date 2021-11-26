import { SystemState } from "./main/system/types"
import { LoginState } from "./login/login-types"
import { DashboardState } from "./main/analysis/types"

export interface RootState {
  name: string
  age: number
  entireDeparment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface RootWithModule {
  loginModule: LoginState
  systemModule: SystemState
  dashboardModule: DashboardState
}

export type StoreType = RootState & RootWithModule
