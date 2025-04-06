import { Controller, Get } from '@nestjs/common';
import { BugwoziFileService } from './bugwozi-file.service';

@Controller()
export class BugwoziFileController {
  constructor(private readonly bugwoziFileService: BugwoziFileService) {}

  @Get()
  getHello(): string {
    return this.bugwoziFileService.getHello();
  }
}
