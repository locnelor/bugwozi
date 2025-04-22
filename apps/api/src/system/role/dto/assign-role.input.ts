import { Field, InputType, Int } from "@nestjs/graphql";


@InputType()
export class AssignRoleInput {
    @Field()
    roleId: string

    @Field(() => [String])
    menuIds: string[]
}