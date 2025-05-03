import { WeChatService } from '@app/wechat';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('order')
export class OrderController {

  constructor(
    private readonly wechatService: WeChatService
  ) { }


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
