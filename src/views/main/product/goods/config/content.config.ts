export const contentConfig = {
  title: "商品列表",
  propsList: [
    { prop: "name", label: "商品名称", minWidth: "60" },
    { prop: "oldPrice", label: "原价格", minWidth: "60", slotName: "oldPrice" },
    { prop: "newPrice", label: "现价格", minWidth: "60", slotName: "newPrice" },
    { prop: "imgUrl", label: "商品图片", minWidth: "80", slotName: "image" },
    { prop: "status", label: "商品状态", minWidth: "70", slotName: "status" },
    { prop: "saleCount", label: "销量", minWidth: "50" },
    { prop: "favorCount", label: "收藏", minWidth: "50" },
    { prop: "address", label: "地址", minWidth: "50" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "150",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "150",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "100", slotName: "handler" }
  ],

  //设置是否显示序号列
  showIndexColumn: true,

  //设置是否显示选中列
  showSelectColumn: true
}
