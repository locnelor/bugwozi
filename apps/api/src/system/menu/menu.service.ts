import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';

@Injectable()
export class MenuService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  findAll() {
    return this.prisma.sys_menu.findMany()
  }

  findOne(uid: string) {
    return this.prisma.sys_menu.findUnique({ where: { uid } })
  }
}
