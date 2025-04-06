import { Module } from '@nestjs/common';
import { BugwoziJobController } from './bugwozi-job.controller';
import { BugwoziJobService } from './bugwozi-job.service';

@Module({
  imports: [],
  controllers: [BugwoziJobController],
  providers: [BugwoziJobService],
})
export class BugwoziJobModule {}
