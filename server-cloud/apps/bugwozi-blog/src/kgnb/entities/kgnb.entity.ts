import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Kgnb {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
