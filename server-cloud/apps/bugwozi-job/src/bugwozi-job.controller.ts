import { Controller, Get } from '@nestjs/common';
import { BugwoziJobService } from './bugwozi-job.service';

@Controller()
export class BugwoziJobController {
  constructor(private readonly bugwoziJobService: BugwoziJobService) {}

  @Get()
  getHello(): string {
    return this.bugwoziJobService.getHello();
  }
}
