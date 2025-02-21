import { Controller, Get } from '@nestjs/common';
import { BugwoziMainService } from './bugwozi-main.service';

@Controller()
export class BugwoziMainController {
  constructor(private readonly bugwoziMainService: BugwoziMainService) {}

  @Get()
  getHello(): string {
    return this.bugwoziMainService.getHello();
  }
}
