import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { PrismaModule } from '@app/prisma';
import { FileModule } from '@app/file';

@Module({
  imports: [
    PrismaModule,
    FileModule
  ],
  providers: [LogService],
  exports: [LogService],
})
export class LogModule { }
