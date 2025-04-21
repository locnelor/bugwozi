import { Field, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import type { blog_user } from "@pkg/database";

@ObjectType()
export class BlogUserEntity extends BaseUEntity implements blog_user {
  @Field()
  name: string;
}