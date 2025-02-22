import { sys_role } from "@prisma/client";
import { BaseEntity } from "../base.entity/base.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { SysMenuOnRoleEntity } from "../sys.menu.on.role.entity/sys.menu.on.role.entity";
import { SysUserEntity } from "../sys.user.entity/sys.user.entity";

@ObjectType()
export class SysRoleEntity extends BaseEntity implements sys_role {
  @Field()
  name: string;

  @Field(() => Boolean)
  status: boolean;

  @Field({ nullable: true })
  comment: string;

  @Field(() => [SysMenuOnRoleEntity], { nullable: true })
  sys_menu_on_role?: SysMenuOnRoleEntity[]

  @Field(() => [SysUserEntity], { nullable: true })
  sys_user?: SysUserEntity[]
}
