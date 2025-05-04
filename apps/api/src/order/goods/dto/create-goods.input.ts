import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateGoodsInput {
  @Field(() => Int)
  amount: number;

  @Field()
  description: string;
  
  @Field({ nullable: true })
  all?: boolean;
} 