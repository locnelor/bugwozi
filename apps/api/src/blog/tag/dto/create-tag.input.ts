import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTagInput {
  @Field(() => String)
  name: string;
} 