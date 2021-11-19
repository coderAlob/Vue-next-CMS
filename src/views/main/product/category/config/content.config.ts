export const contentConfig = {
  title: "商品列表",
  propsList: [
    { prop: "name", label: "商品类别", minWidth: "60" },
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
