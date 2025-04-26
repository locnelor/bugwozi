import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BlogCategoriesEntity } from '@app/prisma/entity/blog/blog.categories.entity';
import { BasePagination, BasePaginationInput } from '@app/prisma/entity/base.pagination';

@ObjectType()
export class CategoriesPaginationEntity extends BasePagination {
  @Field(() => [BlogCategoriesEntity])
  data: BlogCategoriesEntity[];
}

@InputType()
export class CategoriesPaginationInput extends BasePaginationInput {
  @Field(() => String, { nullable: true })
  name?: string;
} 