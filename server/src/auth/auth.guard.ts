import { AuthenticationError, ForbiddenError } from "@nestjs/apollo";
import { ExecutionContext, UnauthorizedException, createParamDecorator } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PrismaClient } from "@prisma/client";

export class JwtAuthGuard extends AuthGuard("jwt") {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}

export class JwtNoAuthGuard extends AuthGuard("jwt") {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}



export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const user = context.switchToHttp().getRequest().user
    return user
  },
);
export type MenuItem = { path: string, name?: string, parentPath?: string }
const menus: MenuItem[] = [];
export const menuPowers = new Map<string, number>();
let time;
const client = new PrismaClient()
const initMenu = async () => {
  const current = await client.sys_menu.findMany();
  const menuSet = new Set(menus.map(item => item.path));
  const currentMap = new Map(current.map(item => [item.path, item]));
  if (menuSet.size !== menus.length) {
    console.error("菜单路径有重复!")
    throw new Error('菜单路径有重复')
  }
  //检查是否有新增菜单
  for (const item of menus) {
    if (currentMap.has(item.path)) continue;
    console.log(`新增菜单:${item.path} - ${item.name}`)
    const entity = await client.sys_menu.create({
      data: {
        path: item.path,
        name: item.name,
        role: 0
      }
    })
    currentMap.set(item.path, entity)
  }
  for (const item of current) {
    //若数据库中的菜单不在当前菜单列表中，删除该菜单
    if (!menuSet.has(item.path)) {
      console.log(`删除菜单:${item.path} - ${item.name}`)
      await client.sys_menu_on_role.deleteMany({
        where: {
          menu: {
            path: item.path
          }
        }
      })
      await client.sys_menu.delete({
        where: {
          path: item.path
        }
      })
      continue;
    }
    //更新菜单
    for (const item of menus) {
      await client.sys_menu.update({
        where: {
          id: currentMap.get(item.path).id
        },
        data: {
          name: item.name,
          parentId: currentMap.get(item.parentPath)?.id,
          role: menuPowers.get(item.path) || 0
        }
      })
    }
  }
}
export const run = (item: MenuItem) => {
  if (menus.some(e => e.path === item.path)) return;
  menus.push(item);
  clearTimeout(time);
  time = setTimeout(initMenu, 1000)
}
export const handleRequest = (err, user, config, powerArray) => {
  if (!powerArray) return user
  if (err || !user) {
    return 401
  }
  if (powerArray.length === 0) {
    return user;
  }
  const {
    menu: {
      role
    }
  } = user.role.sys_menu_on_role.find(({ menu }) => {
    return menu.path === config.path
  }) || { role: 0 };
  if (!role) return 403
  const power = powerArray.reduce((acc, item) => acc | item, 0);
  if ((power & role) !== power) {
    return 403
  }
  return 0;
}
export class AuthPowerGuard extends AuthGuard("jwt") {
  constructor(
    private readonly config: MenuItem,
    private readonly power: number[] = []
  ) {
    menuPowers.set(config.path, power.reduce((acc, item) => acc | item, menuPowers.get(config.path) || 0))
    super()
  }
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
  handleRequest(err, user) {
    const num = handleRequest(err, user, this.config, this.power)
    if (num === 401) throw new AuthenticationError('请先登录！');
    if (num === 403) throw new ForbiddenError('权限不足');
    return user
  }
}
export const MakeAuthPowerGuard = (path: string, name: string, parentPath?: string) => {
  run({ path, name, parentPath })
  return (power?: number[]) => new AuthPowerGuard({ path, name, parentPath }, power)
}


export const VIEW_POWER = 1;//查询权限
export const CREATE_POWER = 1 << 1;//创建权限
export const UPDATE_POWER = 1 << 2;//修改权限
export const DELETE_POWER = 1 << 3;//删除权限
export const EXPORT_POWER = 1 << 4;//导出权限
export const IMPOER_POWER = 1 << 5;//导入权限
export const ASSIGN_POWER = 1 << 6;//分配权限
