import { Module } from '@nestjs/common';
import { BugwoziBlogController } from './bugwozi-blog.controller';
import { BugwoziBlogService } from './bugwozi-blog.service';

@Module({
  imports: [],
  controllers: [BugwoziBlogController],
  providers: [BugwoziBlogService],
})
export class BugwoziBlogModule {}
