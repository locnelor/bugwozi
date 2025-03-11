import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EmailService } from './email.service';



@Controller('email')
export class EmailController {
  constructor(
    private readonly service: EmailService,
  ) { }


  @MessagePattern({ email: "code" })
  async sendCode({ email }) {
    return this.service.sendCode(email);
  }

  @MessagePattern({ email: "verify" })
  async verifyCode({ email, code, uid }) {
    return this.service.verifyCode(email, code, uid);
  }
}
