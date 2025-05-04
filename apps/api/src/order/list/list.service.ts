import { Injectable } from '@nestjs/common';
import { PrismaService, SysUserEntity } from '@app/prisma';
import { OrderPaginationInput } from './dto/list.pagination';
import { Prisma } from '@pkg/database';
import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class ListService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  //获取订单
  async getList({ skip, take, description, state }: OrderPaginationInput, user: SysUserEntity) {
    const where: Prisma.sys_orderWhereInput = {};

    // 默认只能查询自己的订单
    where.userId = user.uid;

    if (description) {
      where.description = {
        contains: description
      };
    }

    if (state) {
      where.state = state as any;
    }

    const total = await this.prisma.sys_order.count({ where });
    const data = await this.prisma.sys_order.findMany({
      where,
      skip,
      take,
      include: {
        goods: true
      }
    });

    return {
      total,
      data,
    };
  }

  //强制修改订单
  async update({ out_trade_no, ...data }: UpdateOrderInput) {
    return this.prisma.sys_order.update({
      where: { out_trade_no },
      data
    });
  }

  //删除订单（仅可删除24h前前且未支付｜支付失败的订单
  async remove(out_trade_no: string, user: SysUserEntity) {
    // 查询订单确保是用户自己的
    const order = await this.prisma.sys_order.findUnique({
      where: { out_trade_no },
      select: {
        userId: true,
        state: true,
        createdAt: true
      }
    });

    // // 如果不是自己的订单，则无法删除
    // if (!order || order.userId !== user.uid) {
    //   return null;
    // }

    // 检查订单状态和创建时间
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    // 只能删除24小时前的且状态为未支付或支付失败的订单
    if (
      order.createdAt > twentyFourHoursAgo ||
      (order.state !== 'NOTPAY' && order.state !== 'PAYERROR')
    ) {
      return null;
    }

    return this.prisma.sys_order.delete({
      where: { out_trade_no }
    });
  }
}
