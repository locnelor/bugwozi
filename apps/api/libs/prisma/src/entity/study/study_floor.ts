import { Field, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import type { study_floor } from "@pkg/database";
import { StudyRoomEntity } from "./study_room";

@ObjectType()
export class StudyFloorEntity extends BaseUEntity implements study_floor {
  @Field()
  floorNumber: number;

  @Field()
  storeId: string;

  @Field(() => [StudyRoomEntity], { nullable: true })
  studyRooms?: StudyRoomEntity[];
}