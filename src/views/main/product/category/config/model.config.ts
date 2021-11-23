import { Form } from "@/base-ui/form"

export const modelConfig: Form = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品类别",
      placeholder: "请输入商品类别"
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: "2px 20px" },
  labelWidth: "80px"
}
