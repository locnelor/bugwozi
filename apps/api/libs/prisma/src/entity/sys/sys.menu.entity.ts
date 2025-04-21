import { Field, Int, ObjectType } from '@nestjs/graphql';
import type { sys_menu } from '@pkg/database';
import { BaseUEntity } from '../base.u.entity';
import { SysMenuOnRoleEntity } from './sys.menu.on.role.entity';
import { SysUserBanMenuEntity } from './sys.user.ban.menu.entity';

@ObjectType()
export class SysMenuEntity extends BaseUEntity implements sys_menu {
  @Field()
  name: string;

  @Field()
  path: string;

  @Field(() => Int)
  powers: number;

  @Field(()=>Int)
  sort: number;

  @Field({ nullable: true })
  comment: string;

  @Field({ nullable: true })
  parentId: string;

  @Field(() => [SysMenuEntity], { nullable: true })
  children?: SysMenuEntity[]

  @Field(() => [SysMenuOnRoleEntity], { nullable: true })
  roles?: SysMenuOnRoleEntity[]

  @Field(() => [SysUserBanMenuEntity], { nullable: true })
  user_bans?: SysUserBanMenuEntity[]
}
