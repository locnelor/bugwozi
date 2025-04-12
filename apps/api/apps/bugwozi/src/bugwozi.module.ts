import { Module } from '@nestjs/common';
import { BugwoziController } from './bugwozi.controller';
import { BugwoziService } from './bugwozi.service';

@Module({
  imports: [],
  controllers: [BugwoziController],
  providers: [BugwoziService],
})
export class BugwoziModule {}
