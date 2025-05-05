import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WxService } from './wx.service';
import { UseGuards } from '@nestjs/common';
import { VIEW_POWER, WechatGuards } from '@app/auth-power';

@Resolver()
export class WxResolver {
  constructor(
    private readonly service: WxService
  ) { }

  @Query(() => String)
  @UseGuards(WechatGuards.GqlAuthGuard([VIEW_POWER]))
  getWechatConfig() {
    return JSON.stringify(this.service.getWechatConfig())
  }

  @Mutation(() => String)
  @UseGuards(WechatGuards.GqlAuthGuard([VIEW_POWER]))
  setWechatConfig(
    @Args("config") config: string
  ) {
    return JSON.stringify(this.service.setWechatConfig(JSON.parse(config)))
  }
}
