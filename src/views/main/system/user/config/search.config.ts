import { Form } from "@/base-ui/form"

export const searchFormConfig: Form = {
  formItems: [
    {
      type: "input",
      label: "id",
      placeholder: "请输入查询id"
    },
    {
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名"
    },
    {
      type: "input",
      label: "手机号码",
      placeholder: "请输入手机号码"
    },
    {
      type: "select",
      label: "状态",
      placeholder: "请选择状态",
      options: [
        { title: "状态1", value: "statusOne" },
        { title: "状态2", value: "statusTwo" }
      ]
    },
    {
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
