import { Field, InputType } from "@nestjs/graphql";
import { sys_account_provider } from "@pkg/database";


@InputType()
export class UpdateAccountInput {
  @Field(() => String, { nullable: true })
  provider?: sys_account_provider

  @Field({ nullable: true })
  value?: string

  @Field({ nullable: true })
  uid?: string

  @Field()
  userId: string
}