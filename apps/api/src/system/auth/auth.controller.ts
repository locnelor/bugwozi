import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }
  //获取临时二维码
  @Get("getQrCode")
  getQrCode() {
    return this.authService.getLoginQrCode()
  }
}
