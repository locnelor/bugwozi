import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../base.entity";
import type { blog_categories } from "@pkg/database";
import { BlogPostsEntity } from "./blog.posts.entity";


@ObjectType()
export class BlogCategoriesEntity extends BaseEntity implements blog_categories {
  @Field()
  name: string

  @Field(() => [BlogPostsEntity], { nullable: true })
  posts?: BlogPostsEntity
}