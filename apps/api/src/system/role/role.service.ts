import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { RolePaginationInput } from './dto/role.pagination';
import { Prisma } from '@pkg/database';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';

@Injectable()
export class RoleService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  findAll() {
    return this.prisma.sys_role.findMany()
  }

  async findList({ page, size, name, comment, status }: RolePaginationInput) {
    const where: Prisma.sys_roleWhereInput = {
      status
    };
    if (!!name) where.name = {
      contains: name
    }
    if (!!comment) where.comment = {
      contains: comment
    }
    const total = await this.prisma.sys_role.count({ where });
    const data = await this.prisma.sys_role.findMany({
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
    return this.prisma.sys_role.findUnique({
      where: {
        uid
      }
    })
  }

  public create(data: CreateRoleInput) {
    return this.prisma.sys_role.create({
      data
    })
  }

  public update({ uid, ...data }: UpdateRoleInput) {
    return this.prisma.sys_role.update({
      where: {
        uid
      },
      data
    })
  }

  remove(uid: string) {
    return this.prisma.sys_role.delete({
      where: {
        uid
      }
    })
  }
}
