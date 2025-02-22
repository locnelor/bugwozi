import { Field, InputType, Int } from "@nestjs/graphql";


@InputType()
export class SysMenuOnRoleInput {
  @Field(() => Int, { nullable: true })
  sys_roleId: number;

  @Field(() => Int, { nullable: true })
  sys_menuId: number;

  @Field(() => Int)
  power: number;
}