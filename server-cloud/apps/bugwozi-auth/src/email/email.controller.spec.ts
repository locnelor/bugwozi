import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('EmailController', () => {
  let controller: EmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailController],
      imports: [
        ConfigModule,
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
      
    }).compile();

    controller = module.get<EmailController>(EmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
