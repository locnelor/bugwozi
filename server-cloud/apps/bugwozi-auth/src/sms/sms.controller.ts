import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('sms')
export class SmsController {
  constructor() { }
  @MessagePattern({ sms: "code" })
  sendCode({ phone, code }) {

  }
}
