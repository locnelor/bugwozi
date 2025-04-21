import { Field, Int, ObjectType } from "@nestjs/graphql";
import type { blog_posts } from "@pkg/database";
import { BlogUserEntity } from "./blog.user.entity";
import { BlogCategoriesEntity } from "./blog.categories.entity";
import { BaseUEntity } from '../base.u.entity';



@ObjectType()
export class BlogPostsEntity extends BaseUEntity implements blog_posts {
  userId: string;
  categoriesId: string | null;
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  blog_userUid: string;

  @Field(() => Int, { nullable: true })
  blog_categoriesId: number | null;

  @Field(() => BlogUserEntity, { nullable: true })
  user?: BlogUserEntity;

  @Field(() => BlogCategoriesEntity, { nullable: true })
  category?: BlogCategoriesEntity;
}