import { InputType, PartialType, Field } from '@nestjs/graphql';
import { CreateAnnouncementInput } from './create-announcement.input';

@InputType()
export class UpdateAnnouncementInput extends PartialType(CreateAnnouncementInput) {
  @Field(() => String)
  uid: string;
} 