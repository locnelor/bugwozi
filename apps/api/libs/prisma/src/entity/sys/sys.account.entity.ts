import { Field, ObjectType } from "@nestjs/graphql";
import { $Enums, sys_account } from "@pkg/database";
import { SysUserEntity } from "./sys.user.entity";
import { BaseUEntity } from "../base.u.entity";


@ObjectType()
export class SysAccountEntity extends BaseUEntity implements sys_account {
  @Field(() => String)
  provider: $Enums.sys_account_provider;

  @Field()
  value: string;

  @Field()
  userId: string;

  @Field(() => SysUserEntity, { nullable: true })
  user?: SysUserEntity
}