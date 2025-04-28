import { Field, ObjectType } from "@nestjs/graphql";
import type { blog_comments } from "@pkg/database";
import { BaseUEntity } from "../base.u.entity";
import { BlogPostsEntity } from "./blog.posts.entity";
import { SysUserEntity } from "../sys";

@ObjectType()
export class BlogCommentsEntity extends BaseUEntity implements blog_comments {
  @Field(() => String)
  content: string

  @Field(() => Boolean)
  status: boolean

  @Field(() => String)
  userId: string

  @Field(() => String)
  postId: string

  @Field(() => SysUserEntity, { nullable: true })
  user?: SysUserEntity

  @Field(() => BlogPostsEntity, { nullable: true })
  post?: BlogPostsEntity
} 