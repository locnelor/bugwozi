import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { CommentsPaginationInput } from './dto/comments.pagination';
import { Prisma } from '@pkg/database';
@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) { }

  create(createCommentInput: CreateCommentInput) {
    return this.prisma.blog_comments.create({
      data: {
        content: createCommentInput.content,
        status: createCommentInput.status,
        userId: createCommentInput.userId,
        postId: createCommentInput.postId,
      },
    });
  }

  findAll({ skip, take, content, status, userId, postId }: CommentsPaginationInput) {
    const where: Prisma.blog_commentsWhereInput = {
      status,
      userId,
      postId
    };
    if (content) where.content = {
      contains: content
    }
    return this.prisma.blog_comments.findMany({
      skip,
      take,
      where,
      include: {
        user: true,
        post: true,
      },
    });
  }

  findOne(uid: string) {
    return this.prisma.blog_comments.findUnique({
      where: { uid },
      include: {
        user: true,
        post: true,
      },
    });
  }

  update({ uid, ...data }: UpdateCommentInput) {
    return this.prisma.blog_comments.update({
      where: { uid },
      data,
    });
  }

  remove(uid: string) {
    return this.prisma.blog_comments.delete({
      where: { uid },
    });
  }
} 