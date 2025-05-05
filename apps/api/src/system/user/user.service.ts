import { Injectable } from '@nestjs/common';
import { PrismaService, SysUserEntity } from '@app/prisma';
import { UserPaginationInput } from './dto/user.pagination';
import { Prisma, sys_account_provider } from '@pkg/database';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async bindAccount(
    user: SysUserEntity,
    provider: sys_account_provider,
    value: string
  ) {
    const find = await this.prisma.sys_account.findUnique({
      where: {
        provider_value: {
          provider,
          value
        }
      }
    })
    if (!!find) return find;
    return await this.prisma.sys_account.create({
      data: {
        provider,
        value,
        userId: user.uid
      }
    })
  }

  findAll() {
    return this.prisma.sys_user.findMany()
  }

  async findList({ skip, take, name }: UserPaginationInput) {
    const where: Prisma.sys_userWhereInput = {};
    if (!!name) where.name = {
      contains: name
    }
    const total = await this.prisma.sys_user.count({ where });
    const data = await this.prisma.sys_user.findMany({
      where,
      skip,
      take,
      include: {
        role: true
      }
    })
    return {
      total,
      data,
    }
  }

  findOne(uid: string) {
    return this.prisma.sys_user.findUnique({
      where: {
        uid
      }
    })
  }

  create(data: CreateUserInput) {
    return this.prisma.sys_user.create({ data })
  }

  update({ uid, ...data }: UpdateUserInput) {
    return this.prisma.sys_user.update({ where: { uid }, data })
  }

  remove(uid: string) {
    return this.prisma.sys_user.delete({
      where: {
        uid
      }
    })
  }
}
