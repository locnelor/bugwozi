import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksResolver } from './links.resolver';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [PrismaModule],
  providers: [LinksService, LinksResolver],
  exports: [LinksService],
})
export class LinksModule {} 