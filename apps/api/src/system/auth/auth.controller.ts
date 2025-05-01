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
  async getQrCode(@Res() res: Response) {
    res.setHeader('Content-Type', 'image/png');
    const buffer = await this.authService.getLoginQrCode()
    res.send(buffer);
  }
}
