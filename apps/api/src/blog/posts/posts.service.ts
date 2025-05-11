import { Injectable } from '@nestjs/common';
import { PrismaService, SysUserEntity } from '@app/prisma';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PostsPaginationInput } from './dto/posts.pagination';
import { Prisma } from '@pkg/database';
import { BlogPostsEntity } from '@app/prisma/entity/blog';
import { CoverService } from '../cover/cover.service';
@Injectable()
export class PostsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cover: CoverService
  ) { }
  async mergeTag(posts: BlogPostsEntity, tags: string[]) {
    const list = await this.prisma.blog_tag.findMany({
      where: {
        name: {
          in: tags
        }
      }
    })
    const set = new Set();
    for (const item of list) set.add(item.name);
    const creates = tags.filter(e => !set.has(e))

    if (creates.length) {
      await this.prisma.blog_tag.createMany({
        data: creates.map((name) => ({ name }))
      })
      const mores = await this.prisma.blog_tag.findMany({
        where: {
          name: {
            in: creates
          }
        }
      })
      for (const tag of mores) list.push(tag)
    }

    await this.prisma.blog_posts_on_tags.deleteMany({
      where: {
        postsId: posts.uid
      }
    })
    await this.prisma.blog_posts_on_tags.createMany({
      data: list.map((tag) => ({
        tagId: tag.uid,
        postsId: posts.uid
      }))
    })

  }

  async create({ tags, base64, ...data }: CreatePostInput, user: SysUserEntity) {
    const posts = await this.prisma.blog_posts.create({
      data: {
        ...data,
        userId: user.uid
      },
    });
    if (!!base64) this.cover.savePostCover(posts.uid, base64);
    await this.mergeTag(posts, tags)
    return posts
  }

  async findAll({ skip, take, title, status, categoriesId }: PostsPaginationInput) {
    const where: Prisma.blog_postsWhereInput = {};
    if (title) where.title = {
      contains: title
    }
    if (status) where.status = status;
    if (categoriesId) where.categoriesId = categoriesId;
    const data = await this.prisma.blog_posts.findMany({
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
    const total = await this.prisma.blog_posts.count({ where });
    return { data, total }
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

  async update({ uid, tags, base64, ...data }: UpdatePostInput) {
    const posts = await this.prisma.blog_posts.update({
      where: { uid },
      data,
    });
    this.cover.savePostCover(posts.uid, base64)
    await this.mergeTag(posts, tags)
    return posts
  }

  remove(uid: string) {
    return this.prisma.blog_posts.delete({
      where: { uid },
    });
  }
} 