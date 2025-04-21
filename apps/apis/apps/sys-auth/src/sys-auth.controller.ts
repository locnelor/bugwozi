import { Controller, Get } from '@nestjs/common';
import { SysAuthService } from './sys-auth.service';

@Controller()
export class SysAuthController {
  constructor(private readonly sysAuthService: SysAuthService) {}

  @Get()
  getHello(): string {
    return this.sysAuthService.getHello();
  }
}
