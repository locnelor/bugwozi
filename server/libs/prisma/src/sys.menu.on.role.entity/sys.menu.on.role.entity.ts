import { Field, Int, ObjectType } from "@nestjs/graphql";
import { sys_menu_on_role } from "@prisma/client";
import { SysRoleEntity } from "../sys.role.entity/sys.role.entity";
import { SysMenuEntity } from "../sys.menu.entity/sys.menu.entity";

@ObjectType()
export class SysMenuOnRoleEntity implements sys_menu_on_role {
  @Field(() => Int)
  power: number;

  @Field(() => Int)
  sys_roleId: number;

  @Field(() => Int)
  sys_menuId: number;

  @Field(() => SysRoleEntity, { nullable: true })
  role?: SysRoleEntity

  @Field(() => SysMenuEntity, { nullable: true })
  menu?: SysMenuEntity
}
