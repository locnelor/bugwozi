import { Controller, Get } from '@nestjs/common';
import { BugwoziBlogService } from './bugwozi-blog.service';

@Controller()
export class BugwoziBlogController {
  constructor(private readonly bugwoziBlogService: BugwoziBlogService) {}

  @Get()
  getHello(): string {
    return this.bugwoziBlogService.getHello();
  }
}
