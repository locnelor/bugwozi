import { Field, Int, ObjectType } from "@nestjs/graphql";
import type { blog_posts_on_tags } from "@pkg/database";
import { BlogTagEntity } from "./blog.tag.entity";
import { BlogPostsEntity } from "./blog.posts.entity";


@ObjectType()
export class BlogPostsOnTagsEntity implements blog_posts_on_tags {
  @Field(() => Int)
  blog_postsId: number;

  @Field(() => Int)
  blog_tagId: number;

  @Field(() => BlogTagEntity, { nullable: true })
  tag?: BlogTagEntity;

  @Field(() => BlogPostsEntity, { nullable: true })
  post?: BlogPostsEntity;
}