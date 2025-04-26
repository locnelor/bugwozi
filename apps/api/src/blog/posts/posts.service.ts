import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PostsPaginationInput } from './dto/posts.pagination';
@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) { }

  create(createPostInput: CreatePostInput) {
    return this.prisma.blog_posts.create({
      data: {
        title: createPostInput.title,
        content: createPostInput.content,
        description: createPostInput.description,
        status: createPostInput.status,
        userId: createPostInput.userId,
        categoriesId: createPostInput.categoriesId,
      },
    });
  }

  findAll(pagination: PostsPaginationInput) {
    const { skip, take, where } = pagination;
    return this.prisma.blog_posts.findMany({
      skip,
      take,
      where,
      include: {
        user: true,
        categories: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  findOne(uid: string) {
    return this.prisma.blog_posts.findUnique({
      where: { uid },
      include: {
        user: true,
        categories: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  update(uid: string, updatePostInput: UpdatePostInput) {
    return this.prisma.blog_posts.update({
      where: { uid },
      data: {
        title: updatePostInput.title,
        content: updatePostInput.content,
        description: updatePostInput.description,
        status: updatePostInput.status,
        categoriesId: updatePostInput.categoriesId,
      },
    });
  }

  remove(uid: string) {
    return this.prisma.blog_posts.delete({
      where: { uid },
    });
  }
} 