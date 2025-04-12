import { Field, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import type { study_seat } from "@pkg/database";
import { StudyReservationEntity } from "./study_reservation";

@ObjectType()
export class StudySeatEntity extends BaseUEntity implements study_seat {
  @Field()
  seatNumber: string;

  @Field()
  roomId: string;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => [StudyReservationEntity], { nullable: true })
  reservations?: StudyReservationEntity[];
}