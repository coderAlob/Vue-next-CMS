import { Form } from "@/base-ui/form"

export const searchFormConfig: Form = {
  formItems: [
    {
      field: "id",
      type: "input",
      label: "商品类别id",
      placeholder: "请输入商品id"
    },
    {
      field: "name",
      type: "input",
      label: "商品类别",
      placeholder: "请输入商品类别"
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
