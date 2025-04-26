import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { BlogPostsEntity } from '@app/prisma/entity/blog/blog.posts.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PostsPaginationInput, PostsPaginationEntity } from './dto/posts.pagination';
import { UseGuards } from '@nestjs/common';
import { BlogArticleGuards } from '@app/auth-power';
import { GqlAuthGuard } from '@app/auth';

@Resolver(() => BlogPostsEntity)
@UseGuards(GqlAuthGuard)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  @Query(() => PostsPaginationEntity)
  @UseGuards(BlogArticleGuards)
  posts(@Args('pagination') pagination: PostsPaginationInput) {
    return this.postsService.findAll(pagination);
  }

  @Query(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards)
  post(@Args('uid') uid: string) {
    return this.postsService.findOne(uid);
  }

  @Mutation(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards)
  updatePost(
    @Args('uid') uid: string,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return this.postsService.update(uid, updatePostInput);
  }

  @Mutation(() => BlogPostsEntity)
  @UseGuards(BlogArticleGuards)
  removePost(@Args('uid') uid: string) {
    return this.postsService.remove(uid);
  }
} 