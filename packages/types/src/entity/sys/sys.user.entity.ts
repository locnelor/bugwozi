import { Field, Int, ObjectType } from "@nestjs/graphql";
import type { sys_user } from "@pkg/database";
import { BaseUEntity } from "../base.u.entity";
import { SysRoleEntity } from "./sys.role.entity";

@ObjectType()
export class SysUserEntity extends BaseUEntity implements sys_user {
  @Field({ nullable: true })
  roleId: string | null;

  @Field()
  name: string;

  password: string;

  salt: string;

  @Field(() => Int, { nullable: true })
  sys_roleId: number | null;

  @Field(() => SysRoleEntity, { nullable: true })
  role?: SysRoleEntity;
}
