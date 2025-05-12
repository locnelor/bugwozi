import { Field, Int, ObjectType } from "@nestjs/graphql";
import { blog_posts } from "@pkg/database";
import { BaseUEntity } from "../base.u.entity";
import { BlogCategoriesEntity } from "./blog.categories.entity";
import { BlogPostsOnTagsEntity } from "./blog.posts.on.tags.entity";
import { SysUserEntity } from "../sys";

@ObjectType()
export class BlogPostsEntity extends BaseUEntity implements blog_posts {
  @Field(() => Int)
  views: number;

  @Field(() => Int)
  likes: number;

  @Field()
  categoriesId: string;

  @Field(() => String)
  title: string

  @Field(() => String)
  content: string

  @Field(() => Boolean)
  status: boolean

  @Field(() => String)
  userId: string

  @Field(() => SysUserEntity, { nullable: true })
  user?: SysUserEntity

  @Field(() => [BlogPostsOnTagsEntity], { nullable: true })
  tags?: BlogPostsOnTagsEntity[]

  @Field(() => BlogCategoriesEntity, { nullable: true })
  categories?: BlogCategoriesEntity
}