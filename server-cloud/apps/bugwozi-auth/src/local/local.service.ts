import { HashService } from '@app/hash';
import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LocalService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hash: HashService,
    private readonly auth: AuthService
  ) { }

  async loginBlog(
    account: string,
    password: string,
  ) {
    const user = await this.prisma.blog_user.findUnique({
      where: {
        account
      }
    })
    // if(!user){
    //   throw 
    // }
    this.hash.verifyPassword(password)
    // return this.prisma.blog_user.findUnique({

    // })  
  }
}
