import { Field, ObjectType } from "@nestjs/graphql";
import { TimeEntity } from "./time.entity";


@ObjectType()
export class BaseUEntity extends TimeEntity {
  @Field()
  uid: string;
}