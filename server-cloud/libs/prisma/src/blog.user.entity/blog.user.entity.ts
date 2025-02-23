import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../base.entity/base.entity";
import { blog_user } from "@prisma/client";
import { BlogQuoteEntity } from "../blog.quote.entity/blog.quote.entity";


@ObjectType()
export class BlogUserEntity extends BaseEntity implements blog_user {
  @Field()
  name: string;

  @Field(() => [BlogQuoteEntity], { nullable: true })
  blog_quote?: BlogQuoteEntity[];
}
