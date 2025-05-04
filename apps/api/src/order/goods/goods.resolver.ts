import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GoodsService } from './goods.service';
import { SysGoodsEntity, SysUserEntity } from '@app/prisma';
import { GoodsPaginationEntity, GoodsPaginationInput } from './dto/goods.pagination';
import { CreateGoodsInput } from './dto/create-goods.input';
import { UpdateGoodsInput } from './dto/update-goods.input';
import { UseGuards } from '@nestjs/common';
import { CREATE_POWER, DELETE_POWER, GqlCurrentUser, OrderGoodsGuards, UPDATE_POWER, VIEW_POWER } from '@app/auth-power';

@Resolver(() => SysGoodsEntity)
export class GoodsResolver {
  constructor(private readonly goodsService: GoodsService) { }

  @Query(() => GoodsPaginationEntity, { name: "goodsList" })
  @UseGuards(OrderGoodsGuards.GqlAuthGuard([VIEW_POWER]))
  findList(
    @Args("pagination") pagination: GoodsPaginationInput,
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return this.goodsService.findList(pagination, user);
  }

  @Query(() => SysGoodsEntity, { nullable: true })
  @UseGuards(OrderGoodsGuards.GqlAuthGuard([VIEW_POWER]))
  findOneGoods(
    @Args('uid') uid: string,
    @Args('all', { nullable: true }) all: boolean,
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return this.goodsService.findOne(uid, user, all);
  }

  @Mutation(() => SysGoodsEntity)
  @UseGuards(OrderGoodsGuards.GqlAuthGuard([CREATE_POWER]))
  createGoods(
    @Args("createInput") input: CreateGoodsInput,
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return this.goodsService.create(input, user);
  }

  @Mutation(() => SysGoodsEntity, { nullable: true })
  @UseGuards(OrderGoodsGuards.GqlAuthGuard([UPDATE_POWER]))
  updateGoods(
    @Args("updateInput") input: UpdateGoodsInput,
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return this.goodsService.update(input, user);
  }

  @Mutation(() => SysGoodsEntity, { nullable: true })
  @UseGuards(OrderGoodsGuards.GqlAuthGuard([DELETE_POWER]))
  removeGoods(
    @Args('uid') uid: string,
    @Args('all', { nullable: true }) all: boolean,
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return this.goodsService.remove(uid, user, all);
  }
}
