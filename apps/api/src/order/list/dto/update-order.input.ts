import { Field, InputType, Int } from "@nestjs/graphql";
import { order_state } from "@pkg/database";

@InputType()
export class UpdateOrderInput {
  @Field()
  out_trade_no: string;

  @Field(() => Int, { nullable: true })
  amount?: number;

  @Field({ nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  state?: order_state;
} 