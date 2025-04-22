import { makePowerGuard } from "src/system/auth/auth.guard";


export const WechatGuards = makePowerGuard("/wechat", "微信公众号", {
  sort: 10
})