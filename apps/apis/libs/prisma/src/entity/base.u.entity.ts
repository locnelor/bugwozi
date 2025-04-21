import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class BaseUEntity {
  @Field()
  uid: string;

  @Field()
  createAt: Date;

  @Field()
  updateAt: Date;
}