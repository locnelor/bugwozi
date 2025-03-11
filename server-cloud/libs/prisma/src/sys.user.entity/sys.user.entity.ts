import { Field, Int, ObjectType } from "@nestjs/graphql";
import { sys_user } from "@prisma/client";
import { SysRoleEntity } from "../sys.role.entity/sys.role.entity";
import { UbaseEntity } from "../ubase.entity/ubase.entity";

@ObjectType()
export class SysUserEntity extends UbaseEntity implements sys_user {
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
