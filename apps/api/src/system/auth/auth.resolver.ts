import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { PrismaService, SysUserEntity } from '@app/prisma';
import { HashService } from '@app/hash';
import { GqlAuthGuard, GqlCurrentUser } from '@app/auth-power';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class QrCodeResult {
    @Field()
    base64: string;

    @Field()
    uuid: string;
}

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

    @Mutation(() => SysUserEntity, { nullable: true })
    scan(
        @Args("uuid") uuid: string
    ) {
        return this.authService.scanQrCode(uuid);
    }

    @Query(() => QrCodeResult)
    async getQrCode() {
        const { buffer, uuid } = await this.authService.getLoginQrCode()
        const base64 = `data:image/png;base64,${buffer.toString('base64')}`
        return {
            base64,
            uuid
        }
    }
}
