import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreateAnnouncementInput } from './dto/create-announcement.input';
import { UpdateAnnouncementInput } from './dto/update-announcement.input';
import { AnnouncementsPaginationInput } from './dto/announcements.pagination';
import { Prisma } from '@pkg/database';
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

  async findAll({ skip, take, title, status }: AnnouncementsPaginationInput) {
    const where: Prisma.blog_announcementsWhereInput = {
      status
    };
    if (title) where.title = {
      contains: title
    }
    const data = await this.prisma.blog_announcements.findMany({
      skip,
      take,
      where,
      orderBy: {
        sort: 'asc',
      },
    });
    const total = await this.prisma.blog_announcements.count({ where });
    return {
      data,
      total
    }
  }

  findOne(uid: string) {
    return this.prisma.blog_announcements.findUnique({
      where: { uid },
    });
  }

  update({ uid, ...data }: UpdateAnnouncementInput) {
    return this.prisma.blog_announcements.update({
      where: { uid },
      data,
    });
  }

  remove(uid: string) {
    return this.prisma.blog_announcements.delete({
      where: { uid },
    });
  }
} 