import { HashService } from '@app/hash';
import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { AuthService, AuthType } from '../auth/auth.service';
import { NotFoundAccountException, WrongPasswordException } from '@app/error/http.error';

@Injectable()
export class LocalService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hash: HashService,
    private readonly auth: AuthService
  ) { }

  async blogLogin(
    account: string,
    password: string,
  ) {
    const user = await this.prisma.blog_user.findUnique({
      where: {
        account
      }
    })
    if (!user) throw NotFoundAccountException
    const isMatch = this.hash.verifyPassword(password, user.salt, user.password)
    if (!isMatch) throw WrongPasswordException
    return this.auth.getToken({
      type: AuthType.blog,
      sub: user.id,
      crypto: user.password
    }, user)
  }
}
