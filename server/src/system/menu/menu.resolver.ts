import { PrismaService } from '@app/prisma';
import { SysMenuEntity } from '@app/prisma/sys.menu.entity/sys.menu.entity';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MenuResolver {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  /**
   * 获取菜单
   */
  @Query(() => [SysMenuEntity])
  async getMenu() {
    return this.prisma.sys_menu.findMany()
  }

}
