import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PostsPaginationInput } from './dto/posts.pagination';
import { Prisma } from '@pkg/database';
@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) { }

  create(data: CreatePostInput) {
    return this.prisma.blog_posts.create({
      data,
    });
  }

  findAll({ skip, take, title, status, categoriesId }: PostsPaginationInput) {
    const where: Prisma.blog_postsWhereInput = {};
    if (title) where.title = {
      contains: title
    }
    if (status) where.status = status;
    if (categoriesId) where.categoriesId = categoriesId;
    return this.prisma.blog_posts.findMany({
      skip,
      take,
      where,
      include: {
        user: true,
        categories: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  findOne(uid: string) {
    return this.prisma.blog_posts.findUnique({
      where: { uid },
      include: {
        user: true,
        categories: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  update({ uid, ...data }: UpdatePostInput) {
    return this.prisma.blog_posts.update({
      where: { uid },
      data,
    });
  }

  remove(uid: string) {
    return this.prisma.blog_posts.delete({
      where: { uid },
    });
  }
} 