import { Field, ObjectType } from "@nestjs/graphql";
import { blog_tag } from "@pkg/database";
import { BaseUEntity } from "../base.u.entity";
import { BlogPostsOnTagsEntity } from "./blog.posts.on.tags.entity";

@ObjectType()
export class BlogTagEntity extends BaseUEntity implements blog_tag {
  @Field()
  name: string

  @Field({ nullable: true })
  description: string

  @Field(() => [BlogPostsOnTagsEntity], { nullable: true })
  blogd?: BlogPostsOnTagsEntity[]
}