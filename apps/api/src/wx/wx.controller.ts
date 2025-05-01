import { WeChatService } from '@app/wechat';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('wechat')
export class WxController {
  constructor(
    private readonly wechatService: WeChatService
  ) { }

  @Post("handle")
  async handle(
    @Body() body
  ) {
    console.log(body)
    const a = await this.wechatService
    return `
    
<xml>
  <ToUserName><![CDATA[toUser]]></ToUserName>
  <FromUserName><![CDATA[fromUser]]></FromUserName>
  <CreateTime>12345678</CreateTime>
  <MsgType><![CDATA[text]]></MsgType>
  <Content><![CDATA[你好]]></Content>
</xml>
    `
  }
}
