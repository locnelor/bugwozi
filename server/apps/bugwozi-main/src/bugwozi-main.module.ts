import { Module } from '@nestjs/common';
import { BugwoziMainController } from './bugwozi-main.controller';
import { BugwoziMainService } from './bugwozi-main.service';

@Module({
  imports: [],
  controllers: [BugwoziMainController],
  providers: [BugwoziMainService],
})
export class BugwoziMainModule {}
