import { NotFoundAccountException, WrongPasswordException } from '@app/error/http.error';
import { HashService } from '@app/hash';
import { PrismaService, SysUserEntity } from '@app/prisma';
import { SysAccountEntity } from '@app/prisma/entity/sys/sys.account.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { sys_account_provider } from '@pkg/database';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/upsert-account.input copy';
import { WeChatService } from '@app/wechat';
import { randomUUID } from 'crypto';
import { RedisCacheService } from '@app/redis-cache';
import { UserService } from '../user/user.service';
import { RandomNameService } from '@app/utils/random-name/random-name.service';

const expire_seconds = 300;//300秒

// 生成二维码
// 扫描后-注册中
// 扫描后-等待登录
// 已结束，删除enum QrCodeType {
enum QrCodeType {
    Loading = "loading",         // 正在生成二维码
    Registering = "registering", // 扫码后 - 注册中
    LoginPending = "loginPending", // 扫码后 - 等待登录
    Error = "error",             // 出现错误
    Expired = "expired"          // 已结束 / 删除
}

@Injectable()
export class AuthService {
    constructor(
        private readonly jwt: JwtService,
        private readonly prisma: PrismaService,
        private readonly hash: HashService,
        private readonly wechatService: WeChatService,
        private readonly redisCache: RedisCacheService,
        private readonly userService: UserService,
        private readonly randomNameService: RandomNameService
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
        // console.log(user.accounts[0].value, this.cryptoValue('account', this.cryptoPassword(user, password)), password)
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
            },
            include: {
                user: true
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

    private setKey(key: string, status: QrCodeType, value?: string) {
        return this.redisCache.set(key, `statue-_-${status}-_-${value}`, "EX", expire_seconds)
    }
    private async getValue(key: string, status: QrCodeType) {
        const res = await this.redisCache.get(key);
        if (!res) return '';
        const arr = res.split('-_-');
        const s = arr[1];
        const value = arr[2];
        if (s !== status) return '';
        return value;
    }

    async scanQrCode(uuid: string) {
        const value = await this.getValue(uuid, QrCodeType.LoginPending)
        if (!value) return;
        const account = await this.prisma.sys_account.findUnique({
            where: {
                uid: value
            },
            include: {
                user: true
            }
        })
        await this.setKey(uuid, QrCodeType.Expired)
        return {
            ...account.user,
            ...this.getToken(account)
        }
    }

    //只有加载中的code能够被设置
    async setQrCode(uuid: string, openId: string) {
        if (!await this.getValue(uuid, QrCodeType.Loading)) {
            return;
        }
        let account = await this.prisma.sys_account.findUnique({
            where: {
                provider_value: {
                    provider: "we_chat",
                    value: openId
                }
            }
        })
        //等待
        //直接返回等待使用，处理注册中。
        // if(!!account){
        // }
        if (!account) {
            const user = await this.userService.create({
                name: this.randomNameService.getNickName(),
                account: this.hash.createUid(),
            })
            account = await this.userService.bindAccount(user, "we_chat", openId);
        }
        await this.setKey(uuid, QrCodeType.LoginPending, account.uid);
    }

    //设置一个加载中的code
    async getLoginQrCode() {
        const uuid = randomUUID();
        const qrCode = await this.wechatService.createQRCode({
            expire_seconds,
            action_name: "QR_STR_SCENE",
            action_info: {
                scene: {
                    scene_str: uuid
                }
            }
        })
        await this.setKey(uuid, QrCodeType.Loading, qrCode.ticket)
        const result = await this.wechatService.showQRCode(qrCode.ticket);
        return { buffer: result.data, uuid }
    }
}
