export const phoneRules = {
  num: [
    {
      required: true,
      message: "手机号码不能为空",
      trigger: "blur"
    },
    {
      pattern: /^1[0-9]{10}$/,
      message: "请输入11为数字的手机号码",
      trigger: "blur"
    }
  ],
  code: [
    {
      required: true,
      message: "验证码不能为空",
      trigger: "blur"
    },
    {
      pattern: /^[0-9]{4}$/,
      message: "请输入4位数字验证码",
      trigger: "blur"
    }
  ]
}
