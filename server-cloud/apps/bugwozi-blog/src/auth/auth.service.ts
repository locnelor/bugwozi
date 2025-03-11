import { AuthUtilService } from '@app/auth-util';
import { Inject, Injectable, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject("BUGWOZI_AUTH")
    private readonly authClient: ClientProxy,
    private readonly authUtil: AuthUtilService
  ) { }
  private send(
    pattern: any,
    data?: any
  ) {
    return this.authClient.send(
      pattern,
      data
    )
  }

  public auth(
    account: string,
    password: string,
  ) {
    return firstValueFrom(this.authClient.send({
      login: "blog"
    }, {
      account,
      password
    }))
  }



  /**
   * github登录或注册
   */
  authByGithub() { }

  /**
   * gitee登录或注册
   */
  authByGitee() { }

  /**
   * QQ登录或注册
   */
  authByQQ() { }

  /**
   * 微信登录或注册
   */
  authByWechat() { }

  /**
   * 获取手机号验证码
   */
  getPhoneCode(
    phone: string
  ) { }

  /**
   * 手机号登录
   */
  authByPhone(
    phone: string,
    code: string
  ) { }


  /**
   * 获取邮箱验证吗
   */
  public getEmailCode(
    email: string
  ) {
    return firstValueFrom(this.send({ email: "code" }, { email }))
  }

  /**
   * 邮箱登录
   */
  authByEmail(
    email: string,
    code: string
  ) {
    return firstValueFrom(this.send({ email: "verify" }, { email, code }))

  }

}
