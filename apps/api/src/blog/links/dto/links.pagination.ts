import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BlogLinksEntity } from '@app/prisma/entity/blog/blog.links.entity';
import { BasePagination, BasePaginationInput } from '@app/prisma/entity/base.pagination';

@ObjectType()
export class LinksPaginationEntity extends BasePagination {
  @Field(() => [BlogLinksEntity])
  data: BlogLinksEntity[];
}

@InputType()
export class LinksPaginationInput extends BasePaginationInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  url?: string;

  @Field(() => Boolean, { nullable: true })
  status?: boolean;
} 