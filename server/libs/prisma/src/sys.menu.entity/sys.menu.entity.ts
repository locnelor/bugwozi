import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../base.entity/base.entity";
import { sys_menu } from "@prisma/client";
import { SysMenuOnRoleEntity } from "../sys.menu.on.role.entity/sys.menu.on.role.entity";

@ObjectType()
export class SysMenuEntity extends BaseEntity implements sys_menu {
  @Field()
  name: string;

  @Field()
  path: string;

  @Field(() => Int)
  role: number;

  @Field({ nullable: true })
  comment: string;

  @Field(() => Int, { nullable: true })
  parentId: number;

  @Field(() => SysMenuEntity, { nullable: true })
  parent?: SysMenuEntity

  @Field(() => [SysMenuEntity], { nullable: true })
  children?: SysMenuEntity[]

  @Field(() => [SysMenuOnRoleEntity], { nullable: true })
  sys_menu_on_role?: SysMenuOnRoleEntity[]
}
