import { SysGoodsEntity } from "@app/prisma/entity/sys/sys.goods.entity";
import { BasePagination, BasePaginationInput } from "@app/prisma/entity/base.pagination";
import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class GoodsPaginationEntity extends BasePagination {
  @Field(() => [SysGoodsEntity])
  data: SysGoodsEntity[]
}

@InputType()
export class GoodsPaginationInput extends BasePaginationInput {
  @Field({ nullable: true })
  description?: string;
  
  @Field({ nullable: true })
  all?: boolean;
} 