import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { LogModule } from '@app/log';
import { PrismaModule } from '@app/prisma';
import { AuthUtilModule } from '@app/auth-util';

@Module({
  imports: [
    ConfigModule,
    LogModule,
    PrismaModule,
    AuthUtilModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('MAIL_HOST'),
          port: configService.get<number>('MAIL_PORT'),
          auth: {
            user: configService.get<string>('MAIL_USER'),
            pass: configService.get<string>('MAIL_PASS'),
          },
        },
        defaults: {
          from: configService.get<string>('MAIL_FROM'),
        },
      }),
    })
  ],
  providers: [EmailService],
  controllers: [EmailController]
})
export class EmailModule { }
