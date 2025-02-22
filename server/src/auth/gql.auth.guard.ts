import { SysUserEntity } from "@app/prisma/sys.user.entity/sys.user.entity";
import { AuthenticationError, ForbiddenError } from "@nestjs/apollo";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { handleRequest, MenuItem, menuPowers, run } from "./auth.guard";

export class GqlAuthGuard extends AuthGuard("jwt") {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return super.canActivate(
      new ExecutionContextHost([req]),
    );
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

export class GqlNoAuthGuard extends AuthGuard("jwt") {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return super.canActivate(
      new ExecutionContextHost([req]),
    );
  }
  handleRequest(err: any, user: any) {
    if (err || !user) {
      return null;
    }
    return user;
  }
}
export class GqlAuthPowerGuard extends AuthGuard("jwt") {
  constructor(
    private readonly config: MenuItem,
    private readonly power: number[] = []
  ) {
    menuPowers.set(config.path, power.reduce((acc, item) => acc | item, menuPowers.get(config.path) || 0))
    super()
  }
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return super.canActivate(
      new ExecutionContextHost([req]),
    );
  }
  handleRequest<TUser extends SysUserEntity>(err: any, user: TUser) {
    const num = handleRequest(err, user, this.config, this.power)
    if (num === 401) throw new AuthenticationError('请先登录！');
    if (num === 403) throw new ForbiddenError('权限不足');
    return user
  }
}

export const MakeGqlAuthPowerGuard = (path: string, name: string, parentPath?: string) => {
  run({ path, name, parentPath })
  return (power?: number[]) => new GqlAuthPowerGuard({ path, name, parentPath }, power)
}