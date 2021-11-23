import { Form } from "@/base-ui/form"

export const modelConfig: Form = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "oldPrice",
      type: "input",
      label: "原价格",
      placeholder: "请输入原价格"
    },
    {
      field: "newPrice",
      type: "input",
      label: "现价格",
      placeholder: "请输入现价格"
    },
    {
      field: "imgUrl",
      type: "input",
      label: "商品图片地址",
      placeholder: "请输入商品图片地址"
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
      label: "商品状态",
      placeholder: "请选择商品状态",
      options: [
        { title: "在售", value: 1 },
        { title: "下架", value: 0 }
      ]
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: "2px 20px" },
  labelWidth: "100px"
}
