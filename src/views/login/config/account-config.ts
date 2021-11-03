export const accountRules = {
  name: [
    {
      required: true,
      message: "用户名不能为空",
      //失去焦点时触发
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{4,10}$/,
      message: "用户名必须是5~10个数字或字母",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      //失去焦点时触发
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{6,16}$/,
      message: "密码必须是6~16位数字或字母",
      trigger: "blur"
    }
  ]
}
