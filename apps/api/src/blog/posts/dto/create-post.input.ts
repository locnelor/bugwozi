import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {

  @Field(() => String, { nullable: true })
  base64?: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => [String])
  tags: string[]

  @Field(() => String)
  categoriesId: string
} 