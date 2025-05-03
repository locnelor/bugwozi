import { WeChatService } from '@app/wechat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor(
    private readonly wechatService: WeChatService,
  ) { }

  createNativeOrder() {
    return this.wechatService.pay.transactions_native({
      description: "测试商品",
      out_trade_no: Date.now().toString(16),
      notify_url: "https://api.bugwozi.top/order/handle",
      amount: {
        total: 1
      }
    })
  }
}
