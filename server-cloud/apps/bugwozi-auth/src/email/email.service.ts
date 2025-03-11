import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { LogService } from '@app/log';
import { PrismaService } from '@app/prisma';
import { AuthUtilService } from '@app/auth-util';
import { WrongEmailFormatException } from '@app/error/http.error';
import { AccountProvider } from '@prisma/client';

type EmailData = {
  to: string;
  subject: string;
  text: string;
  html?: string;
}
@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
    private readonly log: LogService,
    private readonly prisma: PrismaService,
    private readonly authUtil: AuthUtilService
  ) { }

  /**
   * 生成code并发送邮件
   */
  public async sendCode(
    email: string
  ) {
    if (!this.authUtil.verifyEmail(email)) throw WrongEmailFormatException
    const code = await this.authUtil.generateCode(email)
    const res = await this.sendEmail({
      to: email,
      subject: "验证码",
      text: code,
      html: `<h1>验证码是 ${code},五分钟内有效</h1>`
    }).then(() => true).catch(() => false)
    return res;
  }

  public async verifyCode(
    email: string,
    code: string,
    uid?: string
  ) {
    if (!this.authUtil.verifyEmail(email)) throw WrongEmailFormatException
    if (!await this.authUtil.verifyCode(email, code)) throw new Error("验证码错误")
    return await this.authUtil.bindAccount(email, AccountProvider.email, uid)
  }

  public async getUserByEmail(
    email: string
  ) {
    if (!this.authUtil.verifyEmail(email)) throw WrongEmailFormatException
    return await this.prisma.sys_account.findUnique({
      where: {
        provider_provider_id: {
          provider: AccountProvider.email,
          provider_id: email
        }
      }
    })
  }

  async sendEmail(data: EmailData) {
    const { to, subject, text, html } = data;
    try {
      await this.mailerService.sendMail({
        to,
        from: this.configService.get<string>('MAIL_FROM'), // 发件人
        subject,
        text,
        html,
      });
      this.log.success({
        name: "发送邮件",
        data
      })
    } catch (error) {
      this.log.error({
        name: "发送邮件",
        data,
        error
      })
      throw new Error('Failed to send email');
    }
  }
}