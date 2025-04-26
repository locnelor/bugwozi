import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreateAnnouncementInput } from './dto/create-announcement.input';
import { UpdateAnnouncementInput } from './dto/update-announcement.input';
import { AnnouncementsPaginationInput } from './dto/announcements.pagination';

@Injectable()
export class AnnouncementsService {
  constructor(private readonly prisma: PrismaService) { }

  create(createAnnouncementInput: CreateAnnouncementInput) {
    return this.prisma.blog_announcements.create({
      data: {
        title: createAnnouncementInput.title,
        content: createAnnouncementInput.content,
        sort: createAnnouncementInput.sort,
        status: createAnnouncementInput.status,
      },
    });
  }

  findAll(pagination: AnnouncementsPaginationInput) {
    const { skip, take, where } = pagination;
    return this.prisma.blog_announcements.findMany({
      skip,
      take,
      orderBy: {
        sort: 'asc',
      },
    });
  }

  findOne(uid: string) {
    return this.prisma.blog_announcements.findUnique({
      where: { uid },
    });
  }

  update(uid: string, updateAnnouncementInput: UpdateAnnouncementInput) {
    return this.prisma.blog_announcements.update({
      where: { uid },
      data: {
        title: updateAnnouncementInput.title,
        content: updateAnnouncementInput.content,
        sort: updateAnnouncementInput.sort,
        status: updateAnnouncementInput.status,
      },
    });
  }

  remove(uid: string) {
    return this.prisma.blog_announcements.delete({
      where: { uid },
    });
  }
} 