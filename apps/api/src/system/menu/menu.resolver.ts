import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { Menu } from './entities/menu.entity';
import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';
import { UseGuards } from '@nestjs/common';
import { MenuGuards } from './menu.guard';
import { VIEW_POWER } from '../auth/auth.guard';

@Resolver(() => Menu)
export class MenuResolver {
  constructor(private readonly menuService: MenuService) { }

  @Mutation(() => Menu)
  @UseGuards(MenuGuards.GqlAuthGuard([VIEW_POWER]))
  createMenu(@Args('createMenuInput') createMenuInput: CreateMenuInput) {
    return this.menuService.create(createMenuInput);
  } 

  @Query(() => [Menu], { name: 'menu' })
  @UseGuards(MenuGuards.GqlAuthGuard([VIEW_POWER]))
  findAll() {
    return this.menuService.findAll();
  }

  @Query(() => Menu, { name: 'menu' })
  @UseGuards(MenuGuards.GqlAuthGuard([VIEW_POWER]))
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.menuService.findOne(id);
  }

  @Mutation(() => Menu)
  @UseGuards(MenuGuards.GqlAuthGuard([VIEW_POWER]))
  updateMenu(@Args('updateMenuInput') updateMenuInput: UpdateMenuInput) {
    return this.menuService.update(updateMenuInput.id, updateMenuInput);
  }

  @Mutation(() => Menu)
  @UseGuards(MenuGuards.GqlAuthGuard([VIEW_POWER]))
  removeMenu(@Args('id', { type: () => Int }) id: number) {
    return this.menuService.remove(id);
  }
}
