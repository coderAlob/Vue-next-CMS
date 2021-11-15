type FormType = "input" | "password" | "select" | "datePicker"

export interface FormItem {
  field: string
  type: FormType
  label: string
  rules?: any[]
  placeholder?: any
  otherOptions?: any
  options?: any[]
}

export interface Form {
  formItems: FormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
