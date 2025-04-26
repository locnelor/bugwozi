import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateLinkInput } from './create-link.input';

@InputType()
export class UpdateLinkInput extends PartialType(CreateLinkInput) {
  @Field(() => String)
  uid: string;
} 