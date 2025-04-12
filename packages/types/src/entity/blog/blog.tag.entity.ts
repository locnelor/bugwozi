import { Field, ObjectType } from "@nestjs/graphql";
import type { blog_tag } from "@pkg/database";
import { BlogPostsEntity } from "./blog.posts.entity";
import { BaseUEntity } from '../base.u.entity';


@ObjectType()
export class BlogTagEntity extends BaseUEntity implements blog_tag {
  @Field()
  name: string

  @Field(() => [BlogPostsEntity], { nullable: true })
  posts?: BlogPostsEntity[]
}