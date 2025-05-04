import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ListService } from './list.service';
import { UseGuards } from '@nestjs/common';
import { DELETE_POWER, GqlCurrentUser, OrderListGuards, UPDATE_POWER, VIEW_POWER } from '@app/auth-power';
import { SysOrderEntity, SysUserEntity } from '@app/prisma';
import { OrderPaginationEntity, OrderPaginationInput } from './dto/list.pagination';
import { UpdateOrderInput } from './dto/update-order.input';

@Resolver(() => SysOrderEntity)
export class ListResolver {
  constructor(private readonly listService: ListService) { }

  @Query(() => OrderPaginationEntity, { name: "orderList" })
  @UseGuards(OrderListGuards.GqlAuthGuard([VIEW_POWER]))
  getList(
    @Args("pagination") pagination: OrderPaginationInput,
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return this.listService.getList(pagination, user);
  }

  @Mutation(() => SysOrderEntity, { nullable: true })
  @UseGuards(OrderListGuards.GqlAuthGuard([UPDATE_POWER]))
  updateOrder(
    @Args("updateInput") input: UpdateOrderInput,
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return this.listService.update(input);
  }

  @Mutation(() => SysOrderEntity, { nullable: true })
  @UseGuards(OrderListGuards.GqlAuthGuard([DELETE_POWER]))
  removeOrder(
    @Args('out_trade_no') out_trade_no: string,
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return this.listService.remove(out_trade_no, user);
  }
}
