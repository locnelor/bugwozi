import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Pagination {
  @Field(() => Int)
  total: number

  @Field(() => Int)
  page: number

  @Field(() => Int)
  size: number
}
