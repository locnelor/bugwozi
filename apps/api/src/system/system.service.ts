import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { RoleService } from './role/role.service';
import { AuthService } from './auth/auth.service';
import { WebsiteInitFailedException } from '@app/error/http.error';

@Injectable()
export class SystemService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly roleService: RoleService,
    private readonly authService: AuthService
  ) { }
  async hasWebsiteInit() {
    return !!(await this.prisma.sys_user.count())
  }

  async websiteInit({
    roleName,
    username,
    account,
    password
  }) {
    if (!!await this.hasWebsiteInit()) throw WebsiteInitFailedException;
    await this.prisma.sys_role.deleteMany();
    await this.prisma.sys_menu_on_role.deleteMany()

    const role = await this.roleService.create({
      name: roleName
    })
    const menus = await this.prisma.sys_menu.findMany();
    await this.prisma.sys_menu_on_role.createMany({
      data: menus.map(({ uid }) => ({
        menuId: uid,
        roleId: role.uid
      }))
    })
    const user = await this.userService.create({
      name: username,
      account,
      roleId: role.uid
    })
    const provider = 'account'
    const { access_token } = this.authService.getToken(await this.authService.create({
      userId: user.uid,
      provider,
      value: this.authService.cryptoValue(provider, password)
    }))
    return {
      ...user,
      access_token
    }
  }
}
