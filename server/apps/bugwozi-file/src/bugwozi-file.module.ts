import { Module } from '@nestjs/common';
import { BugwoziFileController } from './bugwozi-file.controller';
import { BugwoziFileService } from './bugwozi-file.service';

@Module({
  imports: [],
  controllers: [BugwoziFileController],
  providers: [BugwoziFileService],
})
export class BugwoziFileModule {}
