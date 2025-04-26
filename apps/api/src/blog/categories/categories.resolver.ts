import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { BlogCategoriesEntity } from '@app/prisma/entity/blog/blog.categories.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { CategoriesPaginationInput, CategoriesPaginationEntity } from './dto/categories.pagination';
import { UseGuards } from '@nestjs/common';
import { BlogArticleGuards, CREATE_POWER, DELETE_POWER, UPDATE_POWER, VIEW_POWER } from '@app/auth-power';

@Resolver(() => BlogCategoriesEntity)
@UseGuards(BlogArticleGuards.GqlAuthGuard)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Mutation(() => BlogCategoriesEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([CREATE_POWER]))
  createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => CategoriesPaginationEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([VIEW_POWER]))
  categories(@Args('pagination') pagination: CategoriesPaginationInput) {
    return this.categoriesService.findAll(pagination);
  }

  @Query(() => BlogCategoriesEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([VIEW_POWER]))
  category(@Args('uid') uid: string) {
    return this.categoriesService.findOne(uid);
  }

  @Mutation(() => BlogCategoriesEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([UPDATE_POWER]))
  updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoriesService.update(updateCategoryInput);
  }

  @Mutation(() => BlogCategoriesEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([DELETE_POWER]))
  removeCategory(@Args('uid') uid: string) {
    return this.categoriesService.remove(uid);
  }
} 