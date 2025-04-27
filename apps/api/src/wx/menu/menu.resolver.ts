import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { MenuService, Menu, GetMenuResult } from './menu.service';
import { DefaultRequestResult } from '@app/wechat';

// GraphQL类型定义
class WxMenuResult implements DefaultRequestResult {
  errcode: number;
  errmsg: string;
}

class WxMenuIdResult extends WxMenuResult {
  menuid?: string;
}

@Resolver('WxMenu')
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}

  @Query(() => String, { description: '获取微信菜单' })
  async getWxMenu() {
    const result = await this.menuService.getMenu();
    return JSON.stringify(result);
  }

  @Mutation(() => WxMenuResult, { description: '创建微信菜单' })
  async createWxMenu(
    @Args('menu') menuJson: string,
  ) {
    const menu: Menu = JSON.parse(menuJson);
    return this.menuService.createMenu(menu);
  }

  @Mutation(() => WxMenuResult, { description: '删除微信菜单' })
  async deleteWxMenu() {
    return this.menuService.deleteMenu();
  }

  @Mutation(() => WxMenuIdResult, { description: '创建个性化菜单' })
  async addConditionalWxMenu(
    @Args('menu') menuJson: string,
    @Args('matchRule') matchRuleJson: string,
  ) {
    const menu: Menu = JSON.parse(menuJson);
    const matchRule = JSON.parse(matchRuleJson);
    return this.menuService.addConditionalMenu(menu, matchRule);
  }

  @Mutation(() => WxMenuResult, { description: '删除个性化菜单' })
  async deleteConditionalWxMenu(
    @Args('menuId') menuId: string,
  ) {
    return this.menuService.deleteConditionalMenu(menuId);
  }
}
