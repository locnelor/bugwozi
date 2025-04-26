import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { BlogCommentsEntity } from '@app/prisma/entity/blog/blog.comments.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { CommentsPaginationInput, CommentsPaginationEntity } from './dto/comments.pagination';
import { UseGuards } from '@nestjs/common';
import { BlogCommentGuards } from '@app/auth-power';
import { GqlAuthGuard } from '@app/auth';

@Resolver(() => BlogCommentsEntity)
@UseGuards(GqlAuthGuard)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Mutation(() => BlogCommentsEntity)
  @UseGuards(BlogCommentGuards)
  createComment(@Args('createCommentInput') createCommentInput: CreateCommentInput) {
    return this.commentsService.create(createCommentInput);
  }

  @Query(() => CommentsPaginationEntity)
  @UseGuards(BlogCommentGuards)
  comments(@Args('pagination') pagination: CommentsPaginationInput) {
    return this.commentsService.findAll(pagination);
  }

  @Query(() => BlogCommentsEntity)
  @UseGuards(BlogCommentGuards)
  comment(@Args('uid') uid: string) {
    return this.commentsService.findOne(uid);
  }

  @Mutation(() => BlogCommentsEntity)
  @UseGuards(BlogCommentGuards)
  updateComment(
    @Args('uid') uid: string,
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
  ) {
    return this.commentsService.update(uid, updateCommentInput);
  }

  @Mutation(() => BlogCommentsEntity)
  @UseGuards(BlogCommentGuards)
  removeComment(@Args('uid') uid: string) {
    return this.commentsService.remove(uid);
  }
} 