import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor() { }


  // /**
  //  * 根据key生成验证码
  //  * 节流
  //  * 多种验证方式。
  //  */
  // @MessagePattern({ login: "getCode" })
  // getCode({ key }) {
  //   return {
      
  //   }
  // }
}
