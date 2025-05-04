import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListResolver } from './list.resolver';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [
    PrismaModule
  ],
  providers: [ListResolver, ListService],
})
export class ListModule { }
