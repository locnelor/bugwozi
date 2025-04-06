import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../base.entity";
import type { blog_posts } from "@pkg/database";
import { BlogUserEntity } from "./blog.user.entity";
import { BlogCategoriesEntity } from "./blog.categories.entity";



@ObjectType()
export class BlogPostsEntity extends BaseEntity implements blog_posts {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  blog_userUid: string;

  @Field(() => Int, { nullable: true })
  blog_categoriesId: number | null;

  @Field(() => BlogUserEntity, { nullable: true })
  user?: BlogUserEntity

  @Field(() => BlogCategoriesEntity, { nullable: true })
  category?: BlogCategoriesEntity
}