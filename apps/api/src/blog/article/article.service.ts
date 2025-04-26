import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { ArticlePaginationInput } from './dto/article.pagination';
import { Prisma } from '@pkg/database';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';

@Injectable()
export class ArticleService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  findAll() {
    return this.prisma.blog_posts.findMany()
  }

  async findList({ page, size, title, status }: ArticlePaginationInput) {
    const where: Prisma.blog_postsWhereInput = {
      status
    };
    if (!!title) where.title = {
      contains: title
    }
    const total = await this.prisma.blog_posts.count({ where });
    const data = await this.prisma.blog_posts.findMany({
      where,
      skip: (page - 1) * size,
      take: size,
    })
    return {
      total,
      data,
      page,
      size
    }
  }

  findOne(uid: string) {
    return this.prisma.blog_posts.findUnique({
      where: {
        uid
      }
    })
  }

  create(data: CreateArticleInput) {
    return this.prisma.blog_posts.create({ data })
  }

  update({ uid, ...data }: UpdateArticleInput) {
    return this.prisma.blog_posts.update({ where: { uid }, data })
  }

  remove(uid: string) {
    return this.prisma.blog_posts.delete({
      where: {
        uid
      }
    })
  }
}
