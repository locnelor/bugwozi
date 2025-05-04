import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseUEntity } from "../base.u.entity";
import { $Enums, sys_order } from "@pkg/database";
import { SysUserEntity } from "./sys.user.entity";
import { SysGoodsEntity } from "./sys.goods.entity";
import { TimeEntity } from "../time.entity";


@ObjectType()
export class SysOrderEntity extends TimeEntity implements sys_order {
  @Field()
  out_trade_no: string;

  @Field({ nullable: true })
  transaction_id: string;

  @Field(() => Int)
  amount: number;

  @Field()
  description: string;

  @Field({ nullable: true })
  payOpenId: string;

  @Field(() => String)
  trade_type: $Enums.order_trade_type;

  @Field(() => String)
  state: $Enums.order_state;

  @Field({ nullable: true })
  bank_type: string;

  @Field({ nullable: true })
  attach: string;

  @Field({ nullable: true })
  userId: string;

  @Field(() => SysUserEntity, { nullable: true })
  user?: SysUserEntity

  @Field({ nullable: true })
  url: string;

  @Field()
  goodsId: string;

  @Field(() => SysGoodsEntity, { nullable: true })
  goods?: SysGoodsEntity
}