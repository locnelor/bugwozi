import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CREATE_POWER, DELETE_POWER, UPDATE_POWER, VIEW_POWER } from 'src/auth/auth.guard';
import { SystemMenuPath } from '../system.resolver';
import { PrismaService } from '@app/prisma';
import { SysRoleEntity } from '@app/prisma/sys.role.entity/sys.role.entity';
import { UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ForbiddenError } from '@nestjs/apollo';
import { SysMenuOnRoleInput } from './dto/sys.menu.on.role.input';
import { MakeGqlAuthPowerGuard } from 'src/auth/gql.auth.guard';

const RoleGuard = MakeGqlAuthPowerGuard("/system/role", "角色管理", SystemMenuPath)
@Resolver()
export class RoleResolver {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  /**
   * 获取角色
   */
  @Query(() => [SysRoleEntity])
  @UseGuards(RoleGuard([VIEW_POWER]))
  async getRole(
    @Args("id", { type: () => Int, nullable: true }) id?: number,
    @Args("name", { nullable: true }) name?: string,
    @Args("status", { type: () => Boolean, nullable: true }) status: boolean = true,
    @Args("comment", { nullable: true }) comment?: string,
  ) {
    const where: Prisma.sys_roleWhereInput = { status };
    if (!!id) {
      where.id = id;
    }
    if (!!name) {
      where.name = {
        contains: name
      }
    }
    if (!!comment) {
      where.comment = {
        contains: comment
      }
    }
    return this.prisma.sys_role.findMany({
      where,
      include: {
        sys_menu_on_role: true
      }
    })
  }

  /**
   * 新增角色
   */
  @Mutation(() => SysRoleEntity)
  @UseGuards(RoleGuard([CREATE_POWER]))
  createRole(
    @Args("name") name: string,
    @Args("status", { type: () => Boolean, defaultValue: true }) status: boolean,
    @Args("comment", { nullable: true }) comment?: string,
    @Args("sys_menu_on_role", { nullable: true, type: () => [SysMenuOnRoleInput] }) sys_menu_on_role?: SysMenuOnRoleInput[]
  ) {
    return this.prisma.sys_role.create({
      data: {
        name,
        status,
        comment,
        sys_menu_on_role: {
          createMany: {
            data: sys_menu_on_role || []
          }
        }
      }
    })
  }

  /**
   * 修改角色
   */
  @Mutation(() => SysRoleEntity)
  @UseGuards(RoleGuard([UPDATE_POWER]))
  async updateRole(
    @Args("id", { type: () => Int }) id: number,
    @Args("name", { nullable: true }) name?: string,
    @Args("status", { type: () => Boolean, nullable: true }) status?: boolean,
    @Args("comment", { nullable: true }) comment?: string,
    @Args("sys_menu_on_role", { nullable: true, type: () => [SysMenuOnRoleInput] }) sys_menu_on_role?: SysMenuOnRoleInput[]
  ) {
    const role = await this.prisma.sys_role.findUnique({
      where: {
        id
      },
      include: {
        sys_menu_on_role: true
      }
    })
    if (!role) {
      throw new ForbiddenError("角色不存在")
    }
    if (!!sys_menu_on_role) {
      await this.prisma.sys_menu_on_role.deleteMany({
        where: {
          sys_roleId: id
        }
      })
    }
    return await this.prisma.sys_role.update({
      where: {
        id
      },
      data: {
        name,
        status,
        comment,
        sys_menu_on_role: {
          createMany: {
            data: sys_menu_on_role || []
          }
        }
      }
    })
  }

  /**
   * 删除角色
   */
  @Mutation(() => Int)
  @UseGuards(RoleGuard([DELETE_POWER]))
  async deleteRole(
    @Args("ids", { type: () => [Int] }) ids: number[]
  ) {
    let count = 0;
    for (const id of ids) {
      await this.prisma.sys_menu_on_role.deleteMany({
        where: {
          sys_roleId: id
        }
      })
      await this.prisma.sys_role.delete({
        where: {
          id
        }
      })
      count++;
    }
    return count
  }
}



