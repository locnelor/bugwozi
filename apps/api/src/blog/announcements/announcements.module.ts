import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsResolver } from './announcements.resolver';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [PrismaModule],
  providers: [AnnouncementsService, AnnouncementsResolver],
  exports: [AnnouncementsService],
})
export class AnnouncementsModule {} 