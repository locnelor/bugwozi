import { Module } from '@nestjs/common';
import { RoleResolver } from './role.resolver';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [PrismaModule],
  providers: [RoleResolver]
})
export class RoleModule { }
