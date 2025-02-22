import { HashService } from '@app/hash';
import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hash: HashService
  ) { }

  public async createUser(
    data: {
      account: string,
      name: string,
      password: string,
      sys_roleId?: number,
    }
  ) {
    const find = await this.prisma.sys_user.findUnique({
      where: {
        account: data.account
      }
    })
    if (!!find) throw new Error("用户已存在")
    const { hash, salt } = this.hash.cryptoPassword(data.password);
    const sys_user = await this.prisma.sys_user.create({
      data: {
        account: data.account,
        name: data.name,
        password: hash,
        salt,
        sys_roleId: data.sys_roleId
      }
    })
    return sys_user
  }

  public async updateUser(id: number, update: {
    account?: string,
    name?: string,
    password?: string,
    sys_roleId?: number,
  }) {
    const find = await this.prisma.sys_user.findUnique({
      where: {
        id
      }
    })
    if (!find) throw new Error("用户不存在")
    const data: Prisma.sys_userUpdateInput = {
      account: update.account,
      name: update.name
    };
    if (!!update.sys_roleId) {
      data.role = {
        connect: {
          id: update.sys_roleId
        }
      }
    }
    if (!!update.password) {
      const { hash, salt } = this.hash.cryptoPassword(update.password);
      data.password = hash;
      data.salt = salt;
    }
    return await this.prisma.sys_user.update({
      where: {
        id
      },
      data
    })
  }
  public deleteUser(id: number) {
    return this.prisma.sys_user.delete({
      where: {
        id
      }
    })
  }
}
