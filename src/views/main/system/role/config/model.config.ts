import { Form } from "@/base-ui/form"

export const modelConfig: Form = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名",
      placeholder: "请输入角色名"
    },
    {
      field: "intro",
      type: "input",
      label: "角色介绍",
      placeholder: "请输入角色介绍"
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: "2px 20px" },
  labelWidth: "80px"
}
