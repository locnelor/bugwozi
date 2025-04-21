import { Field, InputType } from "@nestjs/graphql";
import { sys_account_provider } from "@pkg/database";


@InputType()
export class CreateAccountInput {
  @Field(() => String)
  provider: sys_account_provider

  @Field()
  value: string

  @Field()
  userId: string
}