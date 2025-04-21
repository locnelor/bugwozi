import { Field, Int, ObjectType } from "@nestjs/graphql";
import { sys_menu_on_role } from "@pkg/database";
import { SysMenuEntity } from "./sys.menu.entity";
import { SysRoleEntity } from "./sys.role.entity";



@ObjectType()
export class SysMenuOnRoleEntity implements sys_menu_on_role {
  @Field()
  roleId: string;

  @Field()
  menuId: string;

  @Field(() => Int)
  power: number;

  @Field(() => SysMenuEntity, { nullable: true })
  menu?: SysMenuEntity

  @Field(() => SysRoleEntity, { nullable: true })
  role?: SysRoleEntity
}