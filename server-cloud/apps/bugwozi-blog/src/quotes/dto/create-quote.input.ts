import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuoteInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
