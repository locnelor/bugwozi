import { WeChatService } from '@app/wechat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor(
    private readonly wechatService: WeChatService,
  ) { }

  createNativeOrder() {
    return this.wechatService.pay.transactions_native({
      description: "",
      out_trade_no: "",
      notify_url: "",
      amount: {
        total: 1
      }
    })
  }
}
