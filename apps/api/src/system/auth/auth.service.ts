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
        return this.hash.sha1(`${provider}_${value}`);
    }

    public cryptoPassword(user: SysUserEntity, password: string) {
        const hash = this.hash.sha1(`${user.uid}_${password}`)
        return this.hash.md5(`${user.uid}_${hash}`)
    }

    private hashAccount(account: SysAccountEntity) {
        const hash = this.hash.sha1(account.value)
        return this.hash.md5(`${account.userId}_${hash}`)
    }

    /**
     * 账号密码登录 
     */
    public async userLogin(
        account: string,
        password: string
    ) {
        const user = await this.prisma.sys_user.findUnique({
            where: {
                account
            },
            include: {
                accounts: {
                    where: {
                        provider: 'account'
                    }
                }
            }
        })
        if (!user) throw NotFoundAccountException
        if (user.accounts.length === 0) throw NotFoundAccountException;
        console.log(user.accounts[0].value, this.cryptoValue('account', this.cryptoPassword(user, password)), password)
        if (user.accounts[0].value !== this.cryptoValue('account', this.cryptoPassword(user, password))) throw WrongPasswordException;
        return {
            ...user,
            ...this.getToken(user.accounts[0])
        }
    }

    public findAccount(provider: sys_account_provider, data: string) {
        const value = this.cryptoValue(provider, data)
        return this.prisma.sys_account.findUnique({
            where: {
                provider_value: {
                    provider,
                    value
                }
            }
        });
    }

    getToken(account: SysAccountEntity) {
        const payload = {
            sub: account.uid,
            provider: account.provider,
            crypto: this.cryptoValue(account.provider, account.value)
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
                user: {
                    include: {
                        role: {
                            include: {
                                menus: {
                                    include: {
                                        menu: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
        if (!account) throw NotFoundAccountException
        if (provider !== account.provider) throw WrongPasswordException;
        if (crypto !== this.cryptoValue(provider, account.value)) throw WrongPasswordException;
        return account.user;
    }
}
