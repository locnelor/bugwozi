import { WeChatService } from '@app/wechat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListService {
  constructor(
    private readonly wechatService: WeChatService
  ) { }

  createOrder(){
    this.wechatService.pay
  }
}
