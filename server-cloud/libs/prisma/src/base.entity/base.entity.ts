import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class BaseEntity {
  @Field(() => Int)
  id: number

  @Field()
  createAt: Date

  @Field()
  updateAt: Date
}
