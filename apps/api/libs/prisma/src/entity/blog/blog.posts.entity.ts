import { Field, ObjectType } from "@nestjs/graphql";
import { SysUserEntity } from "../system/sys.user.entity";
import { blog_posts } from "@pkg/database";
import { BaseUEntity } from "../base.u.entity";
import { BlogCategoriesEntity } from "./blog.categories.entity";
import { BlogPostsOnTagsEntity } from "./blog.posts.on.tags.entity";

@ObjectType()
export class BlogPostsEntity extends BaseUEntity implements blog_posts {
  @Field()
  categoriesId: string;

  @Field(() => String)
  title: string

  @Field(() => String)
  content: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => Boolean)
  status: boolean

  @Field(() => String)
  userId: string

  @Field(() => SysUserEntity, { nullable: true })
  user?: SysUserEntity

  @Field(() => [BlogPostsOnTagsEntity], { nullable: true })
  tags?: BlogPostsOnTagsEntity[]

  @Field(() => [BlogCategoriesEntity], { nullable: true })
  categories?: BlogCategoriesEntity[]
}