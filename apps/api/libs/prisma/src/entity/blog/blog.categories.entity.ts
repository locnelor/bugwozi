import { Field, ObjectType } from "@nestjs/graphql";
import type { blog_categories } from "@pkg/database";
import { BlogPostsEntity } from "./blog.posts.entity";
import { BaseUEntity } from "../base.u.entity";

@ObjectType()
export class BlogCategoriesEntity extends BaseUEntity implements blog_categories {
  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => [BlogPostsEntity], { nullable: true })
  posts?: BlogPostsEntity;
}
