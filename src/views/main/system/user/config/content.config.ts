export const contentConfig = {
  propsList: [
    { prop: "name", label: "用户名", minWidth: "100" },
    { prop: "realname", label: "真实姓名", minWidth: "100" },
    { prop: "cellphone", label: "手机号码", minWidth: "100" },
    { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "230",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新事件",
      minWidth: "230",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ],

  //设置是否显示序号列
  showIndexColumn: true,

  //设置是否显示选中列
  showSelectColumn: true,

  title: "用户列表"
}
