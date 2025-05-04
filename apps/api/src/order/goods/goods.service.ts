import { PrismaService } from '@app/prisma';
import { SysUserEntity } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { GoodsPaginationInput } from './dto/goods.pagination';
import { Prisma } from '@pkg/database';
import { CreateGoodsInput } from './dto/create-goods.input';
import { UpdateGoodsInput } from './dto/update-goods.input';

@Injectable()
export class GoodsService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  // 判断用户是否为管理员
  isAdmin(user: SysUserEntity): boolean {
    // 固定返回true，表示有管理员权限
    return true;
  }

  async findList({ skip, take, description, all = false }: GoodsPaginationInput, user: SysUserEntity) {
    const where: Prisma.sys_goodsWhereInput = {};

    // 如果不是管理员查询或all为false，则只能查询自己的商品
    if (!all || !this.isAdmin(user)) {
      where.userId = user.uid;
    }

    if (description) {
      where.description = {
        contains: description
      };
    }

    const total = await this.prisma.sys_goods.count({ where });
    const data = await this.prisma.sys_goods.findMany({
      where,
      skip,
      take
    });

    return {
      total,
      data,
    };
  }

  async findOne(uid: string, user: SysUserEntity, all = false) {
    const where: Prisma.sys_goodsWhereUniqueInput = { uid };

    // 检查是否有权限查询
    if (!all || !this.isAdmin(user)) {
      const goods = await this.prisma.sys_goods.findUnique({
        where,
        select: { userId: true }
      });

      // 如果不是自己的商品，则无法查询
      if (!goods || goods.userId !== user.uid) {
        return null;
      }
    }

    return this.prisma.sys_goods.findUnique({
      where
    });
  }

  async create(data: CreateGoodsInput, user: SysUserEntity) {
    // 创建商品时，设置当前用户为商品创建者
    return this.prisma.sys_goods.create({
      data: {
        amount: data.amount,
        description: data.description,
        userId: user.uid
      }
    });
  }

  async update({ uid, amount, description, all = false }: UpdateGoodsInput, user: SysUserEntity) {
    // 检查是否有权限更新
    if (!all || !this.isAdmin(user)) {
      const goods = await this.prisma.sys_goods.findUnique({
        where: { uid },
        select: { userId: true }
      });

      // 如果不是自己的商品，则无法更新
      if (!goods || goods.userId !== user.uid) {
        return null;
      }
    }

    return this.prisma.sys_goods.update({
      where: { uid },
      data: {
        ...(amount !== undefined && { amount }),
        ...(description !== undefined && { description })
      }
    });
  }

  async remove(uid: string, user: SysUserEntity, all = false) {
    // 检查是否有权限删除
    if (!all || !this.isAdmin(user)) {
      const goods = await this.prisma.sys_goods.findUnique({
        where: { uid },
        select: { userId: true }
      });

      // 如果不是自己的商品，则无法删除
      if (!goods || goods.userId !== user.uid) {
        return null;
      }
    }

    return this.prisma.sys_goods.delete({
      where: { uid }
    });
  }
}
