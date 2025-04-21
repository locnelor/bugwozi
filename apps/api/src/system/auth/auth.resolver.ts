import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard, GqlCurrentUser } from './auth.guard';
import { AuthService } from './auth.service';
import { PrismaService, SysUserEntity } from '@app/prisma';
import { HashService } from '@app/hash';

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

    @Mutation(()=>SysUserEntity)
    async authAccountLogin(
        @Args("account") account: string,
        @Args("password") password: string,
    ){
        const user = await this.prismaService.sys_user.findUnique({
            where:{
                account
            }
        })
        

    }

    @Mutation(() => SysUserEntity)
    async auth(
        @Args("account") account: string,
        @Args("password") password: string,
        @Context() { req: { ip } }
    ) {

        
        // const { salt, hash } = this.hashService.cryptoPassword(password)
        // const find: SysUserEntity = await this.prismaService.sys_user.findUnique({
        //     where: {
        //         account,29999
        //         password: hash,
        //         salt
        //     }
        // })
        // if (!find) throw new ForbiddenError("找不到用户")
        // const user: SysUserEntity = await this.prismaService.sys_user.update({
        //     where: {
        //         id: find.id
        //     },
        //     data: {
        //         loginIp: ip
        //     }
        // })
        // user.token = this.authService.getToken(user).access_token
        // return user;
    }
}
