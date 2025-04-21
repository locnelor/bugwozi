import { Module } from '@nestjs/common';
import { SysFileController } from './sys-file.controller';
import { SysFileService } from './sys-file.service';

@Module({
  imports: [],
  controllers: [SysFileController],
  providers: [SysFileService],
})
export class SysFileModule {}
