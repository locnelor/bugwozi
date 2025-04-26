import { WeChatService } from '@app/wechat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WxService {
  constructor(
    private readonly wechatService: WeChatService
  ) {
    this.wechatService.getAccountAccessToken().then(console.log).catch(console.error)
  }
}
