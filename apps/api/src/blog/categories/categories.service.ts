import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { CategoriesPaginationInput } from './dto/categories.pagination';
import { Prisma } from '@pkg/database';
import { CoverService } from '../cover/cover.service';
@Injectable()
export class CategoriesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cover: CoverService
  ) { }

  async create({ base64, ...data }: CreateCategoryInput) {
    const categories = await this.prisma.blog_categories.create({
      data,
    });
    if (!!base64) this.cover.saveCategoriesCover(categories.uid, base64)
    return categories
  }

  async findAll({ skip, take, name }: CategoriesPaginationInput) {
    const where: Prisma.blog_categoriesWhereInput = {};
    if (name) where.name = {
      contains: name
    }
    const data = await this.prisma.blog_categories.findMany({
      skip,
      take,
      where,
      include: {
        posts: true,
      },
    });
    const total = await this.prisma.blog_categories.count({ where });
    return { data, total }
  }

  findOne(uid: string) {
    return this.prisma.blog_categories.findUnique({
      where: { uid },
      include: {
        posts: true,
      },
    });
  }

  async update({ uid, base64, ...data }: UpdateCategoryInput) {
    const categories = await this.prisma.blog_categories.update({
      where: { uid },
      data,
    });
    if (!!base64) this.cover.saveCategoriesCover(categories.uid, base64);
    return categories
  }

  remove(uid: string) {
    return this.prisma.blog_categories.delete({
      where: { uid },
    });
  }
} 