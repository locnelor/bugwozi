import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { PrismaService, SysUserEntity } from '@app/prisma';
import { HashService } from '@app/hash';
import { GqlAuthGuard, GqlCurrentUser } from '@app/auth-power';

@Resolver()
export class AuthResolver {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly authService: AuthService,
        private readonly hashService: HashService
    ) { }

    @Query(() => SysUserEntity)
    @UseGuards(GqlAuthGuard)
    viewer(
        @GqlCurrentUser() user: SysUserEntity
    ) {
        return user;
    }

    @Mutation(() => SysUserEntity)
    authAccountLogin(
        @Args("account") account: string,
        @Args("password") password: string,
    ) {
        return this.authService.userLogin(account, password)
    }
}
