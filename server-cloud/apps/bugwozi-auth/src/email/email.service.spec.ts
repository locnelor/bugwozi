import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailService],
      imports: [
        ConfigModule.forRoot(),
        MailerModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            transport: {
              host: configService.get<string>('MAIL_HOST') ,
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
    }).compile();

    service = module.get<EmailService>(EmailService);
    
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
