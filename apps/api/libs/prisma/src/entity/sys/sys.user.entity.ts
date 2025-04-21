import { Field, Int, ObjectType } from "@nestjs/graphql";
import type { sys_user } from "@pkg/database";
import { BaseUEntity } from "../base.u.entity";
import { SysRoleEntity } from "./sys.role.entity";
import { SysAccountEntity } from "./sys.account.entity";

@ObjectType()
export class SysUserEntity extends BaseUEntity implements sys_user {
  @Field()
  account: string;

  @Field({ nullable: true })
  roleId: string;

  @Field()
  name: string;

  @Field(() => SysRoleEntity, { nullable: true })
  role?: SysRoleEntity;

  @Field(() => [SysAccountEntity], { nullable: true })
  accounts?: SysAccountEntity[]

  @Field({ nullable: true })
  access_token?: string
}
