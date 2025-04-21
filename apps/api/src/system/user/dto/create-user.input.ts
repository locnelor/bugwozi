import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateUserInput {
  @Field()
  name: string

  @Field({ nullable: true })
  account: string

  @Field({ nullable: true })
  roleId?: string
}