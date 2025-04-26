import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { BlogCategoriesEntity } from '@app/prisma/entity/blog/blog.categories.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { CategoriesPaginationInput, CategoriesPaginationEntity } from './dto/categories.pagination';
import { UseGuards } from '@nestjs/common';
import { BlogArticleGuards } from '@app/auth-power';
import { GqlAuthGuard } from '@app/auth';

@Resolver(() => BlogCategoriesEntity)
@UseGuards(GqlAuthGuard)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => BlogCategoriesEntity)
  @UseGuards(BlogArticleGuards)
  createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => CategoriesPaginationEntity)
  @UseGuards(BlogArticleGuards)
  categories(@Args('pagination') pagination: CategoriesPaginationInput) {
    return this.categoriesService.findAll(pagination);
  }

  @Query(() => BlogCategoriesEntity)
  @UseGuards(BlogArticleGuards)
  category(@Args('uid') uid: string) {
    return this.categoriesService.findOne(uid);
  }

  @Mutation(() => BlogCategoriesEntity)
  @UseGuards(BlogArticleGuards)
  updateCategory(
    @Args('uid') uid: string,
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoriesService.update(uid, updateCategoryInput);
  }

  @Mutation(() => BlogCategoriesEntity)
  @UseGuards(BlogArticleGuards)
  removeCategory(@Args('uid') uid: string) {
    return this.categoriesService.remove(uid);
  }
} 