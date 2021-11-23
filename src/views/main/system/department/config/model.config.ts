import { Form } from "@/base-ui/form"

export const modelConfig: Form = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "部门名称",
      placeholder: "请输入部门名称"
    },
    {
      field: "leader",
      type: "input",
      label: "领导",
      placeholder: "请输入领导"
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: "2px 20px" },
  labelWidth: "80px"
}
