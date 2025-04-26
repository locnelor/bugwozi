import { Field, ObjectType } from "@nestjs/graphql";
import type { blog_links } from "@pkg/database";
import { BaseUEntity } from "../base.u.entity";

@ObjectType()
export class BlogLinksEntity extends BaseUEntity implements blog_links {
  @Field(() => String)
  name: string

  @Field(() => String)
  url: string

  @Field(() => String, { nullable: true })
  logo: string

  @Field(() => Number)
  sort: number

  @Field(() => Boolean)
  status: boolean
} 