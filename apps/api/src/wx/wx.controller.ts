import { WeChatService } from '@app/wechat';
import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { xml } from 'body-parser';
import { Request, Response } from 'express';

@Controller('wechat')
export class WxController {
  constructor(
    private readonly wechatService: WeChatService
  ) { }

  @Post("handle")
  async handle(@Req() req: Request, @Res() res: Response) {
    console.log(req)
    console.log(res)
    const decrypt = await this.wechatService.messagePushExpressHandler(req, res);

    console.log(decrypt);
    // 参数	是否必须	描述
    // ToUserName	是	接收方账号（收到的OpenID）
    // FromUserName	是	开发者微信号
    // CreateTime	是	消息创建时间 （整型）
    // MsgType	是	消息类型，文本为text
    // Content	是	回复的消息内容（换行：在content中能够换行，微信客户端就支持换行显示）
    const r = {
      ToUserName: "",
      FromUserName: "",
      CreateTime: Date.now(),
      MsType: "text",
      Content: decrypt
    }
    xml({})
    return decrypt
  }
}
