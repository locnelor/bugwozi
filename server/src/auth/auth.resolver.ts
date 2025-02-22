import { HashService } from '@app/hash';
import { PrismaService } from '@app/prisma';
import { SysUserEntity } from '@app/prisma/sys.user.entity/sys.user.entity';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { ForbiddenError } from '@nestjs/apollo';
import { GqlAuthGuard, GqlCurrentUser } from './gql.auth.guard';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
    private readonly hash: HashService,
  ) { }


  @Query(() => SysUserEntity)
  @UseGuards(new GqlAuthGuard)
  viewer(
    @GqlCurrentUser() user: SysUserEntity
  ) {
    return user;
  }

  @Mutation(() => Boolean)
  async initAdmin(
    @Args("account") account: string,
    @Args("password") password: string,
    @Args("name") name: string
  ) {
    return this.authService.initAdmin(account, password, name)
  }

  @Query(() => Boolean)
  async isAdmin() {
    return (await this.prisma.sys_user.count() > 0)
  }

  @Mutation(() => String)
  async auth(
    @Args("account") account: string,
    @Args("password") password: string
  ) {
    const find: SysUserEntity = await this.prisma.sys_user.findUnique({
      where: {
        account,
      }
    })
    if (!find) throw new ForbiddenError("找不到用户")
    if (!this.hash.verifyPassword(password, find.salt, find.password)) {
      throw new ForbiddenError("密码错误")
    }
    const user: SysUserEntity = await this.prisma.sys_user.update({
      where: {
        id: find.id
      },
      data: {
        loginId: this.hash.createUid()
      }
    })
    return this.authService.getToken(user).access_token
  }
}
