import { Field, ObjectType } from "@nestjs/graphql";
import type { blog_announcements } from "@pkg/database";
import { BaseUEntity } from "../base.u.entity";

@ObjectType()
export class BlogAnnouncementsEntity extends BaseUEntity implements blog_announcements {
  @Field(() => String)
  title: string

  @Field(() => String)
  content: string

  @Field(() => Number)
  sort: number

  @Field(() => Boolean)
  status: boolean
} 