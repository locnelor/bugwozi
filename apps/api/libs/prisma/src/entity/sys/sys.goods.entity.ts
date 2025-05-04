import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import { sys_goods } from "@pkg/database";
import { SysUserEntity } from "./sys.user.entity";
import { SysOrderEntity } from "./sys.order.entity";


@ObjectType()
export class SysGoodsEntity extends BaseUEntity implements sys_goods {
  @Field(() => SysUserEntity, { nullable: true })
  user?: SysUserEntity

  @Field()
  userId: string;

  @Field(() => Int)
  amount: number;

  @Field()
  description: string;

  @Field(() => [SysOrderEntity], { nullable: true })
  orders?: SysOrderEntity[]
}