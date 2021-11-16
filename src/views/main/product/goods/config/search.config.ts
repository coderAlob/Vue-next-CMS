import { Form } from "@/base-ui/form"

export const searchFormConfig: Form = {
  formItems: [
    {
      field: "id",
      type: "input",
      label: "商品id",
      placeholder: "请输入商品id"
    },
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "address",
      type: "input",
      label: "商品地址",
      placeholder: "请输入商品地址"
    },
    {
      field: "status",
      type: "select",
      label: "状态",
      placeholder: "请选择状态",
      options: [
        { title: "启用", value: 1 },
        { title: "禁用", value: 0 }
      ]
    },
    {
      field: "createAt",
      type: "datePicker",
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ],
  itemStyle: { padding: "10px 40px" }
}
