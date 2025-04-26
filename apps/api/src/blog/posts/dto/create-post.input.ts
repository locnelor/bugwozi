import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => String)
  userId: string;

  @Field(() => String, { nullable: true })
  categoriesId?: string;
} 