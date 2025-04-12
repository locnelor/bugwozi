import { Controller, Get } from '@nestjs/common';
import { BugwoziService } from './bugwozi.service';

@Controller()
export class BugwoziController {
  constructor(private readonly bugwoziService: BugwoziService) {}

  @Get()
  getHello(): string {
    return this.bugwoziService.getHello();
  }
}
