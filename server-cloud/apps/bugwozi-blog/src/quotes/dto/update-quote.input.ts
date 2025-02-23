import { CreateQuoteInput } from './create-quote.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuoteInput extends PartialType(CreateQuoteInput) {
  @Field(() => Int)
  id: number;
}
