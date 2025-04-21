import { Field, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import type { study_user } from "@pkg/database";
import { StudyMessageEntity } from "./study_message";
import { StudyReservationEntity } from "./study_reservation";

@ObjectType()
export class StudyUserEntity extends BaseUEntity implements study_user {
  @Field()
  name: string;

  @Field()
  account: string;

  @Field()
  password: string;

  @Field(() => Boolean)
  isAdmin: boolean;

  @Field(() => [StudyReservationEntity], { nullable: true })
  reservation?: StudyReservationEntity[];

  @Field(() => [StudyMessageEntity], { nullable: true })
  message?: StudyMessageEntity[];
}
