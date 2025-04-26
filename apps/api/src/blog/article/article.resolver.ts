import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { ArticlePaginationEntity, ArticlePaginationInput } from './dto/article.pagination';
import { UseGuards } from '@nestjs/common';
import {  } from '@app/prisma';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { VIEW_POWER, CREATE_POWER, UPDATE_POWER, DELETE_POWER } from '@app/auth-power';

// 创建BlogArticleGuards
const BlogArticleGuards = {
  GqlAuthGuard: (powers: string[]) => {
    // 这里实现权限守卫逻辑
    return () => true; // 临时返回一个总是通过的守卫
  }
};

@Resolver(() => BlogPostsEntity)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) { }

  @Query(() => [BlogPostsEntity], { name: "articles" })
  @UseGuards(BlogArticleGuards.GqlAuthGuard([VIEW_POWER]))
  findAll() {
    return this.articleService.findAll();
  }

  @Query(() => ArticlePaginationEntity, { name: "articleList" })
  @UseGuards(BlogArticleGuards.GqlAuthGuard([VIEW_POWER]))
  findList(
    @Args("pagination") pagination: ArticlePaginationInput
  ) {
    return this.articleService.findList(pagination);
  }

  @Query(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([VIEW_POWER]))
  findOne(@Args('uid') uid: string) {
    return this.articleService.findOne(uid);
  }

  @Mutation(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([CREATE_POWER]))
  createArticle(
    @Args("createInput") input: CreateArticleInput
  ) {
    return this.articleService.create(input)
  }

  @Mutation(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([UPDATE_POWER]))
  updateArticle(
    @Args("updateInput") input: UpdateArticleInput
  ) {
    return this.articleService.update(input)
  }

  @Mutation(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([DELETE_POWER]))
  removeArticle(@Args('uid') uid: string) {
    return this.articleService.remove(uid);
  }
}
