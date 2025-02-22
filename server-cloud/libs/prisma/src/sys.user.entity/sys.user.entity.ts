import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../base.entity/base.entity";
import { sys_user } from "@prisma/client";
import { SysRoleEntity } from "../sys.role.entity/sys.role.entity";

@ObjectType()
export class SysUserEntity extends BaseEntity implements sys_user {
  password: string;
  salt: string;

  @Field()
  name: string;

  @Field()
  account: string;

  @Field(() => Int)
  sys_roleId: number;

  @Field({ nullable: true })
  loginId: string

  @Field(() => SysRoleEntity, { nullable: true })
  role?: SysRoleEntity
}
