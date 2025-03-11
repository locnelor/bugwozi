import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { BlogUserEntity } from '@app/prisma/blog.user.entity/blog.user.entity';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Mutation(() => BlogUserEntity)
  async auth(
    @Args("account") account: string,
    @Args("password") password: string,
  ) {
    return this.authService.auth(account, password)
  }

  @Mutation(() => Boolean)
  async getEmailCode(
    @Args("email") email: string
  ) {
    return this.authService.getEmailCode(email);
  }

  @Mutation(() => BlogUserEntity)
  async loginByEmailCode(
    @Args("email") email: string,
    @Args("code") code: string
  ) {
    const verify = await this.authService.authByEmail(email, code);
  }
}
