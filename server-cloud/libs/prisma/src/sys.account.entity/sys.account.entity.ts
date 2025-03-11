import { Field, ObjectType } from "@nestjs/graphql";
import { $Enums, sys_account } from "@prisma/client";

@ObjectType()
export class SysAccountEntity implements sys_account {
  @Field()
  createAt: Date;

  @Field()
  updateAt: Date;

  @Field(() => String)
  provider: $Enums.AccountProvider;

  @Field()
  provider_id: string;

  @Field()
  sys_userUid: string;
}
