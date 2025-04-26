import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreateLinkInput } from './dto/create-link.input';
import { UpdateLinkInput } from './dto/update-link.input';
import { LinksPaginationInput } from './dto/links.pagination';
import { Prisma } from '@pkg/database';
@Injectable()
export class LinksService {
  constructor(private readonly prisma: PrismaService) { }

  create(data: CreateLinkInput) {
    return this.prisma.blog_links.create({
      data,
    });
  }

  findAll({ skip, take, name, status, url }: LinksPaginationInput) {
    const where: Prisma.blog_linksWhereInput = {};
    if (name) where.name = {
      contains: name
    }
    if (status) where.status = status;
    if (url) where.url = {
      contains: url
    }
    return this.prisma.blog_links.findMany({
      skip,
      take,
      where,
      orderBy: {
        sort: 'asc',
      },
    });
  }

  findOne(uid: string) {
    return this.prisma.blog_links.findUnique({
      where: { uid },
    });
  }

  update({ uid, ...data }: UpdateLinkInput) {
    return this.prisma.blog_links.update({
      where: { uid },
      data,
    });
  }

  remove(uid: string) {
    return this.prisma.blog_links.delete({
      where: { uid },
    });
  }
} 