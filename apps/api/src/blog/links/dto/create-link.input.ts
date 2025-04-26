import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLinkInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  url: string;

  @Field(() => String, { nullable: true })
  logo?: string;

  @Field(() => Number, { defaultValue: 0 })
  sort: number;

  @Field(() => Boolean, { defaultValue: true })
  status: boolean;
} 