import { Controller, Get } from '@nestjs/common';
import { SysFileService } from './sys-file.service';

@Controller()
export class SysFileController {
  constructor(private readonly sysFileService: SysFileService) {}

  @Get()
  getHello(): string {
    return this.sysFileService.getHello();
  }
}
