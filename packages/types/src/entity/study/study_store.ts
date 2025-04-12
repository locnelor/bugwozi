import { Field, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import type { study_store } from "@pkg/database";
import { StudyFloorEntity } from "./study_floor";

@ObjectType()
export class StudyStoreEntity extends BaseUEntity implements study_store {
  @Field()
  name: string;

  @Field()
  local: string;

  @Field()
  address: string;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => String, { nullable: true })
  remark: string;

  @Field(() => [StudyFloorEntity], { nullable: true })
  floors?: StudyFloorEntity[];
}