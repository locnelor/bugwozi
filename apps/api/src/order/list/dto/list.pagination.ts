import { SysOrderEntity } from "@app/prisma/entity/sys/sys.order.entity";
import { BasePagination, BasePaginationInput } from "@app/prisma/entity/base.pagination";
import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class OrderPaginationEntity extends BasePagination {
  @Field(() => [SysOrderEntity])
  data: SysOrderEntity[]
}

@InputType()
export class OrderPaginationInput extends BasePaginationInput {
  @Field({ nullable: true })
  description?: string;
  
  @Field({ nullable: true })
  state?: string;
} 