import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class BasePagination {
  @Field(() => Int)
  total: number

  @Field(() => Int)
  page: number

  @Field(() => Int)
  size: number
}


@InputType()
export class BasePaginationInput {
  @Field(() => Int)
  page: number

  @Field(() => Int)
  size: number
}