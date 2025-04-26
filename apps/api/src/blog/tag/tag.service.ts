import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { TagPaginationInput } from './dto/tag.pagination';
import { Prisma } from '@pkg/database';
@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTagInput: CreateTagInput) {
    return this.prisma.blog_tag.create({
      data: {
        name: createTagInput.name,
      },
    });
  }

  findAll({ skip, take, name }: TagPaginationInput) {
    const where: Prisma.blog_tagWhereInput = {};
    if (name) where.name = {
      contains: name
    }
    return this.prisma.blog_tag.findMany({
      skip,
      take,
      where,
      include: {
        blogs: {
          include: {
            posts: true,
          },
        },
      },
    });
  }

  findOne(uid: string) {
    return this.prisma.blog_tag.findUnique({
      where: { uid },
      include: {
        blogs: {
          include: {
            posts: true,
          },
        },
      },
    });
  }

  update({ uid, ...data }: UpdateTagInput) {
    return this.prisma.blog_tag.update({
      where: { uid },
      data,
    });
  }

  remove(uid: string) {
    return this.prisma.blog_tag.delete({
      where: { uid },
    });
  }
} 