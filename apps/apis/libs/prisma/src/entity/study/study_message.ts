import { Field, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import type { study_message } from "@pkg/database";
import { StudyUserEntity } from "./study.user.entity";

@ObjectType()
export class StudyMessageEntity extends BaseUEntity implements study_message {
  @Field(() => StudyUserEntity)
  user: StudyUserEntity;

  @Field()
  userId: string;

  @Field()
  content: string;

  @Field(() => String, { nullable: true })
  reply: string;

  @Field(() => Boolean)
  status: boolean;
}