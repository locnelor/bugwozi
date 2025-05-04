import { Args, Field, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard, GqlCurrentUser } from '@app/auth-power';
import { SysUserEntity } from '@app/prisma';
import { SysOrderEntity } from '@app/prisma/entity/sys/sys.order.entity';
import { string } from 'joi';

@ObjectType()
class ScanOrder {
  @Field({ nullable: true })
  out_trade_no: string

  @Field({ nullable: true })
  state: string
}
@Resolver()
export class OrderResolver {
  constructor(
    private readonly orderService: OrderService
  ) { }


  /**
   * 二维码下单
   */
  @UseGuards(GqlAuthGuard)
  @Mutation(() => SysOrderEntity)
  async getNativeOrder(
    @Args("id") uid: string,
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return this.orderService.createNativeOrder(user, uid)
  }

  /**
   * @link
   * 扫描订单状态
   */
  @UseGuards(GqlAuthGuard)
  @Mutation(() => ScanOrder)
  scanNativeOrder(
    @GqlCurrentUser() user: SysUserEntity,
    @Args("uid") uid: string
  ) {
    return this.orderService.scanOrder(uid, user);
  }

  /**
   * 查询订单信息
   */
  @UseGuards(GqlAuthGuard)
  @Query(() => SysOrderEntity)
  queryOrder(
    @Args("out_trade_no") out_trade_no: string
  ) {
    return this.orderService.findOne(out_trade_no)
  }
}
