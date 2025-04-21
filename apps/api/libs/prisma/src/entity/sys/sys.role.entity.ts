import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import { sys_role } from "@pkg/database";
import { SysMenuOnRoleEntity } from "./sys.menu.on.role.entity";
import { SysUserEntity } from "./sys.user.entity";


@ObjectType()
export class SysRoleEntity extends BaseUEntity implements sys_role {
  @Field()
  name: string;

  @Field(() => Int)
  sort: number;
 
  @Field(() => Boolean)
  status: boolean;

  @Field({ nullable: true })
  comment: string;

  @Field(() => [SysMenuOnRoleEntity], { nullable: true })
  menus?: SysMenuOnRoleEntity[]

  @Field(() => [SysUserEntity], { nullable: true })
  users?: SysUserEntity[]
}