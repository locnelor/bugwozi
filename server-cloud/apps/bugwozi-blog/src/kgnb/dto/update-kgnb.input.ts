import { CreateKgnbInput } from './create-kgnb.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateKgnbInput extends PartialType(CreateKgnbInput) {
  @Field(() => Int)
  id: number;
}
