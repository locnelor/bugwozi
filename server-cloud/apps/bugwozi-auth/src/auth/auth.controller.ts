import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor() { }

  @MessagePattern("")
  async handle(data: any) {

  }
}
