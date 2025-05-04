import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard, GqlCurrentUser } from '@app/auth-power';
import { SysUserEntity } from '@app/prisma';
import { SysOrderEntity } from '@app/prisma/entity/sys/sys.order.entity';

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
  @Mutation(() => String)
  scanNativeOrder(
    @GqlCurrentUser() user: SysUserEntity,
    @Args("uid") uid: string
  ) {
    return this.orderService.scanOrder(uid, user);
  }
}
