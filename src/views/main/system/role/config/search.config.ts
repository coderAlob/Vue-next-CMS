import { Form } from "@/base-ui/form"

export const searchFormConfig: Form = {
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
      label: "权限介绍",
      placeholder: "请输入权限介绍"
    },
    {
      field: "createAt",
      type: "datePicker",
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "2021-11-01",
        endPlaceholder: "2021-11-30",
        type: "daterange"
      }
    }
  ],
  itemStyle: { padding: "10px 40px" }
}
