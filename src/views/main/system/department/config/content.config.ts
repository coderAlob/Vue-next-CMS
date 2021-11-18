export const contentConfig = {
  propsList: [
    { prop: "name", label: "部门名称", minWidth: "100" },
    { prop: "leader", label: "领导", minWidth: "100" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "200",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "200",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ],

  //设置是否显示序号列
  showIndexColumn: true,

  //设置是否展示页脚组件
  showFooter: false,

  //设置是否显示选中列
  showSelectColumn: false,

  title: "部门列表"
}
