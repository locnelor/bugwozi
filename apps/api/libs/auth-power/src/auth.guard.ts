import { AuthenticationError } from '@nestjs/apollo';
import {
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
  createParamDecorator,
} from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { PrismaClient } from '@pkg/database';
import { SysUserEntity } from '@app/prisma';

export class JwtAuthGuard extends AuthGuard('jwt') {
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

export class GqlAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return super.canActivate(new ExecutionContextHost([req]));
  }

  handleRequest(err: any, user: any) {
    if (err || !user) {
      throw err || new AuthenticationError('请先登录！');
    }
    return user;
  }
}

export const GqlCurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user;
  },
);



const handleRequest = (user: SysUserEntity, path: string, power?: number[]) => {
  if (!power) return user as any;
  // const { menu: { powers } } = user?.role?.menus?.find((e) => {
  //   return e?.menu.path === path
  // }) || { powers: 0 };
  const find = user?.role?.menus?.find((e) => {
    return e?.menu?.path === path
  })
  const powers = find?.menu?.powers || 0
  if (!powers) throw new Error('权限不足')
  const p = power.reduce((acc, item) => acc | item, 0);
  if ((p & powers) !== p) {
    throw new ForbiddenException('权限不足');
  }
  return user as any;
}

export class AuthPowerGuard extends AuthGuard('jwt') {
  constructor(
    private readonly path: string,
    private readonly power?: number[],
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user) {
    if (!!err || !user) {
      throw new UnauthorizedException('请先登录！')
    }
    return handleRequest(user, this.path, this.power);
  }
}

export class GqlAuthPowerGuard extends AuthGuard('jwt') {
  constructor(
    private readonly path: string,
    private readonly power?: number[],
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return super.canActivate(new ExecutionContextHost([req]));
  }

  handleRequest<TUser extends SysUserEntity>(err: any, user: TUser) {
    if (err || !user) {
      throw err || new AuthenticationError('请先登录！');
    }
    return handleRequest(user, this.path, this.power);
    // const {
    //   menu: { role },
    // } = user.role.sys_menu_on_role.find(({ menu }) => {
    //   return menu.path === this.path;
    // }) || { role: 0 };
    // if (!role) throw new ForbiddenError('权限不足');
    // const power = this.power.reduce((acc, item) => acc | item, 0);
    // if ((power & role) !== power) {
    //   throw new ForbiddenError('权限不足');
    // }
    // return user;
  }
}

let client = new PrismaClient();
let time;
type MenuItem = {
  name: string;
  path: string;
  parent: string;
  sort: number
};

const menuList: MenuItem[] = [];

export const menuPowers = new Map<string, number>();
const initMenu = async () => {
  const current = await client.sys_menu.findMany();
  const menuSet = new Set(menuList.map(item => item.path));
  const currentMap = new Map(current.map(item => [item.path, item]));
  if (menuSet.size !== menuList.length) {
    console.error("菜单路径有重复!")
    throw new Error('菜单路径有重复')
  }
  //检查是否有新增菜单
  for (const item of menuList) {
    if (currentMap.has(item.path)) continue;
    console.log(`新增菜单:${item.path} - ${item.name}`)
    const entity = await client.sys_menu.create({
      data: {
        path: item.path,
        name: item.name,
        powers: 0
      }
    })
    currentMap.set(item.path, entity)
  }
  //若数据库中的菜单不在当前菜单列表中，删除该菜单
  for (const item of current) {
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
  }
  //更新菜(仅更新权限
  for (const item of menuList) {
    console.log(`同步菜单 - ${item.name}`)
    await client.sys_menu.update({
      where: {
        uid: currentMap.get(item.path).uid
      },
      data: {
        parentId: currentMap.get(item.parent)?.uid,
        powers: menuPowers.get(item.path) || 0,
        sort: item.sort
      }
    })

  }
}
const run = (item: MenuItem) => {
  if (menuList.some(e => e.path === item.path)) return;
  menuList.push(item);
  clearTimeout(time);
  time = setTimeout(initMenu, 1000)
}
export const makePowerGuard = (path: string, name: string, {
  parent = '',
  sort = 0
} = {}) => {
  run({ path, name, parent, sort })
  const GqlAuthGuard = (power?: number[]) => {
    menuPowers.set(path, power?.reduce((p, e) => p | e, 0) || 0)
    return new GqlAuthPowerGuard(path, power)
  }
  const AuthGuard = (power?: number[]) => {
    menuPowers.set(path, power?.reduce((p, e) => p | e, 0) || 0)
    return new AuthPowerGuard(path, power);
  }
  return {
    GqlAuthGuard,
    AuthGuard,
    path,
    name,
    parent
  }
}


export const VIEW_POWER = 1; //查询权限
export const CREATE_POWER = 1 << 1; //编辑权限
export const UPDATE_POWER = 1 << 2; //删除权限
export const DELETE_POWER = 1 << 3; //增加权限
export const EXPORT_POWER = 1 << 4; //导出权限
export const IMPORT_POWER = 1 << 5; //导入权限
export const ASSIGN_POWER = 1 << 6; //分配权限
