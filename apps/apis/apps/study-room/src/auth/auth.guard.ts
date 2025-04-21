import {
  ExecutionContext,
  UnauthorizedException,
  createParamDecorator,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

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

export class JwtNoAuthGuard extends AuthGuard('jwt') {
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

export const VIEW_POWER = 1; //查询权限
export const CREATE_POWER = 1 << 1; //创建权限
export const UPDATE_POWER = 1 << 2; //修改权限
export const DELETE_POWER = 1 << 3; //删除权限
export const EXPORT_POWER = 1 << 4; //导出权限
export const IMPORT_POWER = 1 << 5; //导入权限
export const ASSIGN_POWER = 1 << 6;//分配权限
