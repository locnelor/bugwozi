import { Field, Int, ObjectType } from "@nestjs/graphql";
import { TimeEntity } from "./time.entity";


@ObjectType()
export class BaseEntity extends TimeEntity {
  @Field(() => Int)
  id: number;
}