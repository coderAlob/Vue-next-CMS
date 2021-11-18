export const contentConfig = {
  propsList: [
    { prop: "name", label: "菜单名称", minWidth: "100" },
    { prop: "type", label: "类型", minWidth: "60" },
    { prop: "url", label: "菜单url", minWidth: "100" },
    { prop: "icon", label: "菜单icon", minWidth: "150" },
    { prop: "permission", label: "菜单权限", minWidth: "150" },
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
  showIndexColumn: false,

  //设置是否展示页脚组件
  showFooter: false,

  //设置是否显示选中列
  showSelectColumn: false,
  childrenProps: {
    rowKey: "id",
    treeProp: {
      children: "children"
    }
  },

  title: "菜单列表"
}
