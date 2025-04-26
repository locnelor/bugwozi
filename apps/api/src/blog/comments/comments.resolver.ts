import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { BlogCommentsEntity } from '@app/prisma/entity/blog/blog.comments.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { CommentsPaginationInput, CommentsPaginationEntity } from './dto/comments.pagination';
import { UseGuards } from '@nestjs/common';
import { BlogCommentGuards, CREATE_POWER, DELETE_POWER, UPDATE_POWER, VIEW_POWER } from '@app/auth-power';

@Resolver(() => BlogCommentsEntity)
@UseGuards(BlogCommentGuards.GqlAuthGuard())
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) { }

  @Mutation(() => BlogCommentsEntity)
  @UseGuards(BlogCommentGuards.GqlAuthGuard([CREATE_POWER]))
  createComment(@Args('createCommentInput') createCommentInput: CreateCommentInput) {
    return this.commentsService.create(createCommentInput);
  }

  @Query(() => CommentsPaginationEntity)
  @UseGuards(BlogCommentGuards.GqlAuthGuard([VIEW_POWER]))
  comments(@Args('pagination') pagination: CommentsPaginationInput) {
    return this.commentsService.findAll(pagination);
  }

  @Query(() => BlogCommentsEntity)
  @UseGuards(BlogCommentGuards.GqlAuthGuard([VIEW_POWER]))
  comment(@Args('uid') uid: string) {
    return this.commentsService.findOne(uid);
  }

  @Mutation(() => BlogCommentsEntity)
  @UseGuards(BlogCommentGuards.GqlAuthGuard([UPDATE_POWER]))
  updateComment(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
  ) {
    return this.commentsService.update(updateCommentInput);
  }

  @Mutation(() => BlogCommentsEntity)
  @UseGuards(BlogCommentGuards.GqlAuthGuard([DELETE_POWER]))
  removeComment(@Args('uid') uid: string) {
    return this.commentsService.remove(uid);
  }
} 