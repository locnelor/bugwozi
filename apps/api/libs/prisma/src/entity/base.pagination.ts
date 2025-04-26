import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class BasePagination {
  @Field(() => Int)
  total: number
}


@InputType()
export class BasePaginationInput {
  @Field(() => Int, { defaultValue: 1 })
  take: number

  @Field(() => Int, { defaultValue: 10 })
  skip: number
}