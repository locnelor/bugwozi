import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMenuInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
