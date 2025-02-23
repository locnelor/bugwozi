import { Module } from '@nestjs/common';
import { BugwoziAuthController } from './bugwozi-auth.controller';
import { BugwoziAuthService } from './bugwozi-auth.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { LocalModule } from './local/local.module';
import { GithubModule } from './github/github.module';
import { GiteeModule } from './gitee/gitee.module';
import { WechatModule } from './wechat/wechat.module';
import { TokenModule } from './token/token.module';
import { SmsModule } from './sms/sms.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    LocalModule,
    GithubModule,
    GiteeModule,
    WechatModule,
    TokenModule,
    SmsModule,
    EmailModule
  ],
  controllers: [BugwoziAuthController],
  providers: [BugwoziAuthService],
})
export class BugwoziAuthModule { }
