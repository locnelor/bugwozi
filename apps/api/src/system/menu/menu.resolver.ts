import { Resolver, Query, Args } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { UseGuards } from '@nestjs/common';
import { SysMenuEntity } from '@app/prisma';
import { SystemMenuGuards, VIEW_POWER } from '@app/auth-power';

@Resolver(() => SysMenuEntity)
export class MenuResolver {
  constructor(private readonly menuService: MenuService) { }

  @Query(() => [SysMenuEntity], { name: 'menu' })
  @UseGuards(SystemMenuGuards.GqlAuthGuard([VIEW_POWER]))
  findAll() {
    return this.menuService.findAll();
  }

  @Query(() => SysMenuEntity, { name: 'menu' })
  @UseGuards(SystemMenuGuards.GqlAuthGuard([VIEW_POWER]))
  findOne(@Args('uid') id: string) {
    return this.menuService.findOne(id);
  }
}
