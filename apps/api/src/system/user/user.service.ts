import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { UserPaginationInput } from './dto/user.pagination';
import { Prisma } from '@pkg/database';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  findAll() {
    return this.prisma.sys_user.findMany()
  }

  async findList({ page, size, name }: UserPaginationInput) {
    const where: Prisma.sys_userWhereInput = {
    };
    if (!!name) where.name = {
      contains: name
    }
    const total = await this.prisma.sys_user.count({ where });
    const data = await this.prisma.sys_user.findMany({
      where,
      skip: (page - 1) * size,
      take: size,
    })
    return {
      total,
      data,
      page,
      size
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
