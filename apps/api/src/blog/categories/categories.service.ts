import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { CategoriesPaginationInput } from './dto/categories.pagination';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCategoryInput: CreateCategoryInput) {
    return this.prisma.blog_categories.create({
      data: {
        name: createCategoryInput.name,
        description: createCategoryInput.description,
      },
    });
  }

  findAll(pagination: CategoriesPaginationInput) {
    const { skip, take, where } = pagination;
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

  update(uid: string, updateCategoryInput: UpdateCategoryInput) {
    return this.prisma.blog_categories.update({
      where: { uid },
      data: {
        name: updateCategoryInput.name,
        description: updateCategoryInput.description,
      },
    });
  }

  remove(uid: string) {
    return this.prisma.blog_categories.delete({
      where: { uid },
    });
  }
} 