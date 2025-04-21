import { Module } from '@nestjs/common';
import { SysAuthController } from './sys-auth.controller';
import { SysAuthService } from './sys-auth.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { ConfigService } from '@nestjs/config';
import { HashModule } from "@app/hash"
import { PrismaModule } from '@app/prisma';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({

      })
    }),
    HashModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          SECRET_KEY:configService.get('SECRET_KEY'),
        };
      }
    }),
    AuthModule,
    PrismaModule
  ],
  controllers: [SysAuthController],
  providers: [SysAuthService],
})
export class SysAuthModule {}
