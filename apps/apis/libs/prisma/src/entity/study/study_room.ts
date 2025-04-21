import { Field, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import type { study_room } from "@pkg/database";
import { StudySeatEntity } from "./study_seat";
import { StudyFloorEntity } from "./study_floor";

@ObjectType()
export class StudyRoomEntity extends BaseUEntity implements study_room {
  @Field()
  floorId: string;

  @Field()
  name: string;

  @Field()
  capacity: number;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => [StudySeatEntity], { nullable: true })
  seats?: StudySeatEntity[];

  @Field(() => StudyFloorEntity, { nullable: true })
  floor?: StudyFloorEntity;
}
