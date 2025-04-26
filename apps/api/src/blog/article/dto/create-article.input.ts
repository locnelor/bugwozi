import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateArticleInput {
  @Field()
  title: string

  @Field({ nullable: true })
  content: string

  @Field({ nullable: true })
  status?: boolean

  @Field({ nullable: true })
  authorId?: string
} 