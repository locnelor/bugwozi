import { Controller, Get } from '@nestjs/common';
import { BugwoziAuthService } from './bugwozi-auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class BugwoziAuthController {
  constructor(private readonly bugwoziAuthService: BugwoziAuthService) {}

  @Get()
  getHello(): string {
    return this.bugwoziAuthService.getHello();
  }

  @MessagePattern({ cmd: 'login' })
  handleLogin(data: { username: string; password: string }) {
    console.log(`收到登录请求:`, data);
    if (data.username === 'test' && data.password === '123456') {
      return { message: '登录成功', token: 'fake-jwt-token' };
    }
    return { message: '登录失败', error: '用户名或密码错误' };
  }
}
