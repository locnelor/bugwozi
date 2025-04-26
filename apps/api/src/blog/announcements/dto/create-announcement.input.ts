import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAnnouncementInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => Number, { defaultValue: 0 })
  sort: number;

  @Field(() => Boolean, { defaultValue: true })
  status: boolean;
} 