import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../base.entity";
import type { blog_tag } from "@pkg/database";
import { BlogPostsEntity } from "./blog.posts.entity";


@ObjectType()
export class BlogTagEntity extends BaseEntity implements blog_tag {
  @Field()
  name: string

  @Field(() => [BlogPostsEntity], { nullable: true })
  posts?: BlogPostsEntity[]
}