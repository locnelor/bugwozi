import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BlogTagEntity } from '@app/prisma/entity/blog/blog.tag.entity';
import { BasePagination, BasePaginationInput } from '@app/prisma/entity/base.pagination';

@ObjectType()
export class TagPaginationEntity extends BasePagination {
  @Field(() => [BlogTagEntity])
  data: BlogTagEntity[];
}

@InputType()
export class TagPaginationInput extends BasePaginationInput {
  @Field(() => String, { nullable: true })
  name?: string;
} 