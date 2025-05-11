import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { BlogPostsEntity } from '@app/prisma/entity/blog/blog.posts.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PostsPaginationInput, PostsPaginationEntity } from './dto/posts.pagination';
import { UseGuards } from '@nestjs/common';
import { BlogArticleGuards, CREATE_POWER, DELETE_POWER, GqlCurrentUser, UPDATE_POWER, VIEW_POWER } from '@app/auth-power';
import { SysUserEntity } from '@app/prisma';

@Resolver(() => BlogPostsEntity)
@UseGuards(BlogArticleGuards.GqlAuthGuard())
export class PostsResolver {
  constructor(private readonly postsService: PostsService) { }




  @Mutation(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([CREATE_POWER]))
  createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return this.postsService.create(createPostInput, user);
  }

  @Query(() => PostsPaginationEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([VIEW_POWER]))
  posts(@Args('pagination') pagination: PostsPaginationInput) {
    return this.postsService.findAll(pagination);
  }

  @Query(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([VIEW_POWER]))
  post(@Args('uid') uid: string) {
    return this.postsService.findOne(uid);
  }

  @Mutation(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([UPDATE_POWER]))
  updatePost(
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return this.postsService.update(updatePostInput);
  }

  @Mutation(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([DELETE_POWER]))
  removePost(@Args('uid') uid: string) {
    return this.postsService.remove(uid);
  }
} 