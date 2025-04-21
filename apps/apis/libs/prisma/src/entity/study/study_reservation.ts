import { Field, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import type { study_reservation } from "@pkg/database";
import { StudyUserEntity } from "./study.user.entity";

@ObjectType()
export class StudyReservationEntity extends BaseUEntity implements study_reservation {
  @Field(() => StudyUserEntity)
  user: StudyUserEntity;

  @Field()
  userId: string;

  @Field()
  seatId: string;

  @Field(() => Date)
  startTime: Date;

  @Field(() => Date)
  endTime: Date;

  @Field()
  status: string;
}