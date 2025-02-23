import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../base.entity/base.entity";
import { blog_quote } from "@prisma/client";
import { BlogUserEntity } from "../blog.user.entity/blog.user.entity";

@ObjectType()
export class BlogQuoteEntity extends BaseEntity implements blog_quote {
  @Field()
  content: string;

  @Field(() => BlogUserEntity, { nullable: true })
  creator?: BlogUserEntity;

  @Field(() => Int, { nullable: true })
  user_id: number;
}
