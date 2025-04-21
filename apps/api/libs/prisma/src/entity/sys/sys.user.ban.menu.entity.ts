import { Field, ObjectType } from "@nestjs/graphql";
import { sys_user_ban_menu } from "@pkg/database";
import { SysUserEntity } from "./sys.user.entity";
import { SysMenuEntity } from "./sys.menu.entity";


@ObjectType()
export class SysUserBanMenuEntity implements sys_user_ban_menu {
  @Field()
  userId: string;

  @Field()
  menuId: string;

  @Field(() => SysUserEntity, { nullable: true })
  user?: SysUserEntity

  @Field(() => SysMenuEntity, { nullable: true })
  menu?: SysMenuEntity
}