import { Controller, Get } from '@nestjs/common';
import { BugwoziAuthService } from './bugwozi-auth.service';

@Controller()
export class BugwoziAuthController {
  constructor(private readonly bugwoziAuthService: BugwoziAuthService) {}

  @Get()
  getHello(): string {
    return this.bugwoziAuthService.getHello();
  }
}
