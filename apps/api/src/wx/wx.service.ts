import { WeChatService } from '@app/wechat';
import { Injectable, Logger } from '@nestjs/common';
import { AccountAccessTokenResult, DefaultRequestResult, SignatureResult, TicketResult, UserAccessTokenResult, UserInfoResult } from '@app/wechat';
import { Request, Response } from 'express';

@Injectable()
export class WxService {
  private readonly logger = new Logger(WxService.name);

  constructor(
    private readonly wechatService: WeChatService
  ) {
    // 初始化时测试获取访问令牌
    this.getAccessToken()
      .then(token => this.logger.log(`微信公众号服务初始化成功，获取到访问令牌：${token.access_token}`))
      .catch(err => this.logger.error(`微信公众号服务初始化失败：${err.message}`, err.stack));
  }

  /**
   * 获取公众号访问令牌
   * @returns 访问令牌结果
   */
  async getAccessToken(): Promise<AccountAccessTokenResult> {
    return this.wechatService.getAccountAccessToken();
  }

  /**
   * 获取稳定版访问令牌
   * @param force 是否强制刷新
   * @returns 访问令牌结果
   */
  async getStableAccessToken(force = false): Promise<AccountAccessTokenResult> {
    return this.wechatService.getStableAccessToken(undefined, undefined, force);
  }

  /**
   * 获取JS-SDK票据
   * @returns 票据结果
   */
  async getJsApiTicket(): Promise<TicketResult> {
    return this.wechatService.getJSApiTicket();
  }

  /**
   * 生成JS-SDK签名
   * @param url 当前网页的URL，不包含#及其后面部分
   * @returns 签名结果
   */
  async createJssdkSignature(url: string): Promise<SignatureResult> {
    return this.wechatService.jssdkSignature(url);
  }

  /**
   * 处理微信服务器发来的消息推送请求
   * @param req Express请求对象
   * @param res Express响应对象
   * @param resText 回复给微信服务器的文本（可选）
   */
  async handleMessagePush(req: Request, res: Response, resText?: string): Promise<void> {
    await this.wechatService.messagePushExpressHandler(req, res, resText);
  }

  /**
   * 处理明文格式的消息推送
   * @param req Express请求对象
   * @param res Express响应对象
   * @param resText 回复给微信服务器的文本（可选）
   */
  async handlePlainMessagePush(req: Request, res: Response, resText?: string): Promise<void> {
    await this.wechatService.plainMessagePushExpressHandler(req, res, resText);
  }

  /**
   * 检查微信服务器签名
   * @param req Express请求对象
   * @param res Express响应对象
   */
  checkSignature(req: Request, res: Response): void {
    this.wechatService.checkSignatureExpress(req, res);
  }

  /**
   * 通过授权码获取用户访问令牌
   * @param code 授权码
   * @returns 用户访问令牌结果
   */
  async getAccessTokenByCode(code: string): Promise<UserAccessTokenResult> {
    return this.wechatService.getAccessTokenByCode(code);
  }

  /**
   * 获取用户信息
   * @param accessToken 用户访问令牌
   * @param openid 用户OpenID
   * @param lang 语言
   * @returns 用户信息结果
   */
  async getUserInfo(accessToken: string, openid: string, lang: 'zh_CN' | 'zh_TW' | 'en' = 'zh_CN'): Promise<UserInfoResult> {
    return this.wechatService.getUserInfo(accessToken, openid, lang);
  }

  /**
   * 发送模板消息
   * @param openid 接收者openid
   * @param templateId 模板ID
   * @param data 模板数据
   * @param url 点击跳转的URL（可选）
   * @returns 发送结果
   */
  async sendTemplateMessage(openid: string, templateId: string, data: any, url?: string): Promise<DefaultRequestResult & { msgid: string }> {
    const message = {
      touser: openid,
      template_id: templateId,
      url,
      data
    };
    return this.wechatService.sendTemplateMessage(message);
  }

  /**
   * 创建公众号二维码
   * @param sceneStr 场景值字符串
   * @param expireSeconds 过期时间（秒），默认30天
   * @returns 二维码创建结果
   */
  async createQRCode(sceneStr: string, expireSeconds: number = 2592000) {
    return this.wechatService.createQRCode({
      action_name: 'QR_STR_SCENE',
      expire_seconds: expireSeconds,
      action_info: {
        scene: {
          scene_str: sceneStr
        }
      }
    });
  }

  /**
   * 获取永久二维码
   * @param sceneStr 场景值字符串
   * @returns 二维码创建结果
   */
  async createLimitQRCode(sceneStr: string) {
    return this.wechatService.createQRCode({
      action_name: 'QR_LIMIT_STR_SCENE',
      action_info: {
        scene: {
          scene_str: sceneStr
        }
      }
    });
  }

  /**
   * 获取二维码图片URL
   * @param ticket 二维码ticket
   * @returns 二维码图片URL
   */
  getQRCodeUrl(ticket: string): string {
    return `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${encodeURIComponent(ticket)}`;
  }
}
