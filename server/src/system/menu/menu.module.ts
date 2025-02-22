import { Module } from '@nestjs/common';
import { MenuResolver } from './menu.resolver';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [PrismaModule],
  providers: [MenuResolver]
})
export class MenuModule { }
