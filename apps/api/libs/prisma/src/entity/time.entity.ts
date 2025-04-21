import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class TimeEntity {
  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}