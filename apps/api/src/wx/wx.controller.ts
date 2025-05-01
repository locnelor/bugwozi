import { WeChatService } from '@app/wechat';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('wechat')
export class WxController {
  constructor(
    private readonly wechatService: WeChatService
  ) { }

  @Post("handle")
  handle(
    @Body() body
  ) {
    console.log(body)
  }
}
