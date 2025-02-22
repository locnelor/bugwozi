import { Module } from '@nestjs/common';
import { BugwoziAuthController } from './bugwozi-auth.controller';
import { BugwoziAuthService } from './bugwozi-auth.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule
  ],
  controllers: [BugwoziAuthController],
  providers: [BugwoziAuthService],
})
export class BugwoziAuthModule { }
