import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CREATE_POWER, DELETE_POWER, UPDATE_POWER, VIEW_POWER } from 'src/auth/auth.guard';
import { SystemMenuPath } from '../system.resolver';
import { PrismaService } from '@app/prisma';
import { UserPagination } from '@app/prisma/pagination/user.pagination/user.pagination';
import { UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { SysUserEntity } from '@app/prisma/sys.user.entity/sys.user.entity';
import { UserService } from './user.service';
import { MakeGqlAuthPowerGuard } from 'src/auth/gql.auth.guard';


const UserGuard = MakeGqlAuthPowerGuard("/system/users", "用户管理", SystemMenuPath)
@Resolver()
export class UserResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly service: UserService
  ) { }

  /**
   * 查询用户列表。
   */
  @Query(() => UserPagination)
  @UseGuards(UserGuard([VIEW_POWER]))
  async findUsers(
    @Args("page", { type: () => Int }) page: number,
    @Args("size", { type: () => Int }) size: number,
    @Args("id", { type: () => Int, nullable: true }) id?: number,
    @Args("account", { nullable: true }) account?: string,
    @Args("name", { nullable: true }) name?: string,
    @Args("sys_roleId", { nullable: true, type: () => Int }) sys_roleId?: number
  ) {
    const where: Prisma.sys_userWhereInput = {};
    if (!!account) {
      where.account = account
    }
    if (!!name) {
      where.name = {
        contains: name
      }
    }
    if (!!sys_roleId) {
      where.sys_roleId = sys_roleId
    }
    const total = await this.prisma.sys_user.count({ where });
    const data = await this.prisma.sys_user.findMany({
      skip: (page - 1) * size,
      take: size,
      where
    });
    return {
      total,
      page,
      size,
      data
    }
  }

  /**
   * 创建用户
   */
  @Mutation(() => SysUserEntity)
  @UseGuards(UserGuard([CREATE_POWER]))
  createUser(
    @Args("name") name: string,
    @Args("account") account: string,
    @Args("password") password: string,
    @Args("sys_roleId", { nullable: true, type: () => Int }) sys_roleId?: number
  ) {
    return this.service.createUser({
      account,
      name,
      password,
      sys_roleId
    })
  }

  /**
   * 修改用户信息
   */
  @Mutation(() => SysUserEntity)
  @UseGuards(UserGuard([UPDATE_POWER]))
  async updateUser(
    @Args("id", { type: () => Int }) id: number,
    @Args("account", { nullable: true }) account?: string,
    @Args("password", { nullable: true }) password?: string,
    @Args("name", { nullable: true }) name?: string,
    @Args("sys_roleId", { nullable: true, type: () => Int }) sys_roleId?: number
  ) {
    return this.service.updateUser(id, {
      account,
      password,
      name,
      sys_roleId
    })
  }

  /**
   * 删除用户
   */
  @Mutation(() => SysUserEntity)
  @UseGuards(UserGuard([DELETE_POWER]))
  deleteUser(@Args("id", { type: () => Int }) id: number) {
    return this.service.deleteUser(id)
  }
}
