export interface Account {
  name: string
  password: string
}

export interface LoginResult<T = any> {
  code: number
  data: T
}

export interface LoginResultData {
  id: number
  name: string
  token: string
}
