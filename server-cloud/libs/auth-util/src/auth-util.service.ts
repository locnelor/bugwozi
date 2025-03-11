import { CodeGenerateFailedException, CodeGetTooFrequentlyException } from '@app/error/http.error';
import { PrismaService } from '@app/prisma';
import { RedisCacheService } from '@app/redis-cache';
import { Injectable } from '@nestjs/common';
import { AccountProvider } from '@prisma/client';
import dayjs from 'dayjs';


// 验证码类型
//数字、数字字符串、字符串
type CodeType = "number" | "string";
type GetCodeOptions = {
  cooldown?: number,//冷却时间
  expire?: number,//有效时间
  type?: CodeType,//验证码类型
  length?: number,//长度
}
@Injectable()
export class AuthUtilService {
  constructor(
    private readonly redis: RedisCacheService,
    private readonly prisma: PrismaService
  ) { }
  public async verifyCode(
    key: string,
    code: string
  ) {
    const res = await this.redis.get(key)
    if (res === code) {
      await this.redis.del(key)
      return true
    }
    return false
  }
  public verifyEmail(email: string) {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)
  }

  public async generateCode(
    key: string,
    {
      cooldown = 60,
      expire = 60 * 5,
      type = "number",
      length = 6,
    }: GetCodeOptions = {},
  ) {
    //判断是否在冷却中
    const ttl = await this.redis.ttl(key)
    if (ttl > cooldown) throw CodeGetTooFrequentlyException
    const time = dayjs().format("YYYY-MM-DD HH");
    const countKey = `count_${time}_${key}`
    //判断该key是否超出限制
    const count = parseInt(await this.redis.get(countKey) || "0")
    if (count > 5) CodeGetTooFrequentlyException
    //生成验证码
    let code = "";
    switch (type) {
      case "number":
        code = new Array(length).fill(0).map(() => Math.floor(Math.random() * 10)).join("")
      case "string":
        code = new Array(length).fill(0).map(() => Math.random().toString(36)[3]).join("")
    }
    if (!code) throw CodeGenerateFailedException
    //覆盖。
    await this.redis.setex(key, expire, code)
    //记录次数
    await this.redis.setex(countKey, 60 * 60 * 12, count + 1)
    return code;
  }

  /**
   * 第三方登录/注册逻辑
   * 未注册 带登录状态  => 创建，绑定。
   * 未注册 不带登录状态  => 创建，等待初始化。
   * 已注册 无用户 带登录状态  => 绑定。
   * 已注册 无用户 不带登录状态  => 无操作。
   * 已注册 有用户 => 登录成功
   * 等待绑定时，返回
   */
  public async bindAccount(
    provider_id: string,
    provider: AccountProvider,
    sys_userUid?: string
  ) {
    const findAccount = await this.prisma.sys_account.findUnique({
      where: {
        provider_provider_id: {
          provider,
          provider_id
        }
      }
    })
    //未注册，创建、绑定
    if (!findAccount) {
      return await this.prisma.sys_account.create({
        data: {
          provider,
          provider_id,
          sys_userUid
        }
      })
    }
    //有用户，登录成功。
    if (!!findAccount.sys_userUid) {
      if (!!sys_userUid) throw new Error("该账号已绑定")
      return findAccount
    }
    //无用户，绑定。
    if (!!sys_userUid) {
      return await this.prisma.sys_account.update({
        where: {
          provider_provider_id: {
            provider,
            provider_id
          }
        },
        data: {
          sys_userUid
        }
      })
    }
    return findAccount
  }
}
