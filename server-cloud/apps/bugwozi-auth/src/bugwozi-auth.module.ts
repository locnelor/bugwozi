import { Module } from '@nestjs/common';
import { BugwoziAuthController } from './bugwozi-auth.controller';
import { BugwoziAuthService } from './bugwozi-auth.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [BugwoziAuthController],
  providers: [BugwoziAuthService],
})
export class BugwoziAuthModule {}
