import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { CategoriesPaginationInput } from './dto/categories.pagination';
import { Prisma } from '@pkg/database';
@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) { }

  create(data: CreateCategoryInput) {
    return this.prisma.blog_categories.create({
      data,
    });
  }

  findAll({ skip, take, name }: CategoriesPaginationInput) {
    const where: Prisma.blog_categoriesWhereInput = {};
    if (name) where.name = {
      contains: name
    }
    return this.prisma.blog_categories.findMany({
      skip,
      take,
      where,
      include: {
        posts: true,
      },
    });
  }

  findOne(uid: string) {
    return this.prisma.blog_categories.findUnique({
      where: { uid },
      include: {
        posts: true,
      },
    });
  }

  update({ uid, ...data }: UpdateCategoryInput) {
    return this.prisma.blog_categories.update({
      where: { uid },
      data,
    });
  }

  remove(uid: string) {
    return this.prisma.blog_categories.delete({
      where: { uid },
    });
  }
} 