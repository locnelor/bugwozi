import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BlogPostsEntity } from '@app/prisma/entity/blog/blog.posts.entity';
import { BasePagination, BasePaginationInput } from '@app/prisma/entity/base.pagination';
import { BlogCategoriesEntity } from '@app/prisma/entity/blog';

@ObjectType()
export class PostsPaginationEntity extends BasePagination {
  @Field(() => [BlogPostsEntity])
  data: BlogPostsEntity[];
}

@InputType()
export class PostsPaginationInput extends BasePaginationInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Boolean, { nullable: true })
  status?: boolean;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  categoriesId?: string;

  @Field(() => BlogCategoriesEntity, { nullable: true })
  categories?: BlogCategoriesEntity
} 