import { WeChatService } from '@app/wechat';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

  constructor(
    private readonly wechatService: WeChatService,
    private readonly orderService: OrderService
  ) { }

  @Get("testOrder")
  testOrder() {
    return this.orderService.createNativeOrder()
  }


  @Post("handle")
  async handle(
    @Body() body
  ) {
    console.log(body)
    const {
      id,
      create_time,
      resource_type,
      summary,
      resource: {
        algorithm,
        original_type,
        ciphertext,
        associated_data,
        nonce
      }
    } = body
    const result = await this.wechatService.pay.decipher_gcm(ciphertext, associated_data, nonce, "a0673aea39ad90b6e667956a78b74ea3");
    console.log(result);
    return {
      code: 200
    }
  }
}
