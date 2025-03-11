import { Module } from '@nestjs/common';
import { AuthUtilService } from './auth-util.service';
import { RedisCacheModule } from '@app/redis-cache';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [RedisCacheModule, PrismaModule],
  providers: [AuthUtilService],
  exports: [AuthUtilService],
})
export class AuthUtilModule { }
