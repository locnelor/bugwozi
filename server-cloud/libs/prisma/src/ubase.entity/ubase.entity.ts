import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class UbaseEntity {
  @Field()
  uid: string;

  @Field()
  createAt: Date

  @Field()
  updateAt: Date
}
