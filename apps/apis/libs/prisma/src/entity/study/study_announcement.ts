import { Field, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import type { study_announcement } from "@pkg/database";

@ObjectType()
export class StudyAnnouncementEntity extends BaseUEntity implements study_announcement {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => Boolean)
  status: boolean;
}