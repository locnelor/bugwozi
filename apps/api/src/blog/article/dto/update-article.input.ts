import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class UpdateArticleInput {
  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  content?: string

  @Field({ nullable: true })
  status?: boolean

  @Field({ nullable: true })
  authorId?: string

  @Field()
  uid: string
} 