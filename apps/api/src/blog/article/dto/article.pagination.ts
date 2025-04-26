import { BlogPostsEntity } from "@app/prisma";
import { BasePagination, BasePaginationInput } from "@app/prisma/entity/base.pagination";
import { Field, InputType, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class ArticlePaginationEntity extends BasePagination {
  @Field(() => [BlogPostsEntity])
  data: BlogPostsEntity[]
}

@InputType()
export class ArticlePaginationInput extends BasePaginationInput {
  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  status?: boolean
}