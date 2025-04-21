import { NotFoundAccountException, WrongPasswordException } from '@app/error/http.error';
import { HashService } from '@app/hash';
import { PrismaService, SysUserEntity } from '@app/prisma';
import { SysAccountEntity } from '@app/prisma/entity/sys/sys.account.entity';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { sys_account_provider } from '@pkg/database';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/upsert-account.input copy';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwt: JwtService,
        private readonly prisma: PrismaService,
        private readonly hash: HashService,
    ) {
    }

    public create(
        data: CreateAccountInput
    ) {
        return this.prisma.sys_account.create({ data })
    }

    public update({ uid, ...data }: UpdateAccountInput) {
        return this.prisma.sys_account.update({ where: { uid }, data })
    }

    public cryptoValue(provider: sys_account_provider, value: string) {
        const { salt, hash } = this.hash.cryptoPassword(`${provider}_${value}`);
        return this.hash.md5(`${salt}_${hash}`);
    }

    public cryptoPassword(user:SysUserEntity, password: string) {
        const {salt,hash} = this.hash.cryptoPassword(`${user.uid}_${password}`)
    
    }


    private hashAccount(account: SysAccountEntity) {
        const { salt, hash } = this.hash.cryptoPassword(account.value)
        return this.hash.md5(`${salt}_${hash}`)
    }

    public async userLogin(
        account: string,
        password: string
    ) {

    }

    public async findAccount(provider: sys_account_provider, data: string) {
        const value = this.cryptoValue(provider, data)
        return await this.prisma.sys_account.findUnique({
            where: {
                provider_value: {
                    provider,
                    value
                }
            }
        })
    }
    // public validateUser(account: string, password: string) {

    // return this.prisma.sys_user.findUnique({
    //     where: {
    //         account,
    //         password
    //     }
    // })
    // }
    getToken(account: SysAccountEntity) {
        const payload = {
            sub: account.uid,
            provider: account.provider,
            crypto: this.hashAccount(account)
        }
        return {
            access_token: this.jwt.sign(payload),
        }
    }

    async validate({ crypto, provider, sub }) {
        const account = await this.prisma.sys_account.findUnique({
            where: {
                uid: sub
            },
            include: {
                user: true
            }
        })
        if (!account) throw NotFoundAccountException
        if (provider !== account.provider) throw WrongPasswordException;
        if (crypto !== this.hashAccount(account)) throw WrongPasswordException;
        return account.user;
    }
}
