import { Module } from '@nestjs/common';
import { LocalController } from './local.controller';
import { PrismaModule } from '@app/prisma';
import { HashModule } from '@app/hash';
import { AuthModule } from '../auth/auth.module';
import { LocalService } from './local.service';

@Module({
  imports: [
    PrismaModule,
    HashModule,
    AuthModule
  ],
  controllers: [LocalController],
  providers: [LocalService]
})
export class LocalModule { }
