import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { PrismaModule } from '@app/prisma';
import { HashModule } from '@app/hash';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule, HashModule],
  providers: [UserResolver, UserService],
  exports: [UserService]
})
export class UserModule { }
