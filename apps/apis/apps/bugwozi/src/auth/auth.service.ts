import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '@app/hash';
import { PrismaService } from '@app/prisma';

export type AuthPayload = {
  sub: string;
  crypto: string;
};
@Injectable()
export class AuthService {
  constructor(
    private readonly hash: HashService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  getToken(payload: AuthPayload, obj = {}) {
    payload.crypto = this.hash.md5(payload.crypto);
    return {
      ...obj,
      access_token: this.jwt.sign(payload, {
        expiresIn: this.config.getOrThrow('JWT_EXPIRES'),
        secret: this.config.get('JWT_SECRET'),
      }),
    };
  }

  async validate({ sub, crypto }: AuthPayload) {

    const user = await this.prisma.sys_user.findUnique({
      where: {
        uid: sub,
        password: this.hash.md5(crypto),
      },
    });
    if (!user) return false;
    if (this.hash.md5(user.password) !== crypto) return false;
    return user;
  }
}
