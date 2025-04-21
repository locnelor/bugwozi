import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateRoleInput {
  @Field()
  name: string

  @Field(() => Boolean, { nullable: true })
  status?: boolean

  @Field({ nullable: true })
  comment?: string

  @Field(() => Int, { nullable: true })
  sort?: number
}
