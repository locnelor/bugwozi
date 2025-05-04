import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateGoodsInput {
  @Field()
  uid: string;
  
  @Field(() => Int, { nullable: true })
  amount?: number;

  @Field({ nullable: true })
  description?: string;
  
  @Field({ nullable: true })
  all?: boolean;
} 