import { Controller, Get, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  //获取临时二维码
  @Get("getQrCode")
  async getQrCode() {
    const { buffer, uuid } = await this.authService.getLoginQrCode()
    const base64 = `data:image/png;base64,${buffer.toString('base64')}`
    return {
      base64,
      uuid
    }
  }
}
