import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateRoleInput {
  @Field()
  uid: string

  @Field({ nullable: true })
  name?: string

  @Field(() => Boolean, { nullable: true })
  status?: boolean

  @Field({ nullable: true })
  comment?: string

  @Field(() => Int, { nullable: true })
  sort?: number
}
