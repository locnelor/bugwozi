import { Module } from '@nestjs/common';
import { BugwoziAuthController } from './bugwozi-auth.controller';
import { BugwoziAuthService } from './bugwozi-auth.service';

@Module({
  imports: [],
  controllers: [BugwoziAuthController],
  providers: [BugwoziAuthService],
})
export class BugwoziAuthModule {}
