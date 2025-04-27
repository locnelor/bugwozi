import { Injectable, Logger } from '@nestjs/common';
import { WxService } from '../wx.service';
import { Request, Response } from 'express';
import { DefaultRequestResult } from '@app/wechat';

// 定义消息类型
export enum MessageType {
  TEXT = 'text',
  IMAGE = 'image',
  VOICE = 'voice',
  VIDEO = 'video',
  MUSIC = 'music',
  NEWS = 'news',
}

// 文本消息
export interface TextMessage {
  content: string;
}

// 图片消息
export interface ImageMessage {
  media_id: string;
}

// 语音消息
export interface VoiceMessage {
  media_id: string;
}

// 视频消息
export interface VideoMessage {
  media_id: string;
  thumb_media_id?: string;
  title?: string;
  description?: string;
}

// 音乐消息
export interface MusicMessage {
  title?: string;
  description?: string;
  musicurl: string;
  hqmusicurl: string;
  thumb_media_id: string;
}

// 图文消息项
export interface NewsItem {
  title: string;
  description?: string;
  picurl?: string;
  url: string;
}

// 图文消息
export interface NewsMessage {
  articles: NewsItem[];
}

// 统一消息格式
export type MessageContent = TextMessage | ImageMessage | VoiceMessage | VideoMessage | MusicMessage | NewsMessage;

@Injectable()
export class MessageService {
  private readonly logger = new Logger(MessageService.name);

  constructor(private readonly wxService: WxService) {}

  /**
   * 处理来自微信服务器的消息推送
   * @param req Express请求对象
   * @param res Express响应对象
   * @param responseText 可选的响应文本
   */
  async handleMessagePush(req: Request, res: Response, responseText?: string): Promise<void> {
    try {
      await this.wxService.handleMessagePush(req, res, responseText);
    } catch (error) {
      this.logger.error(`处理微信消息推送失败: ${error.message}`, error.stack);
      if (res && !res.headersSent) {
        res.status(500).send('Internal Server Error');
      }
    }
  }

  /**
   * 处理明文消息推送
   * @param req Express请求对象
   * @param res Express响应对象
   * @param responseText 可选的响应文本
   */
  async handlePlainMessagePush(req: Request, res: Response, responseText?: string): Promise<void> {
    try {
      await this.wxService.handlePlainMessagePush(req, res, responseText);
    } catch (error) {
      this.logger.error(`处理微信明文消息推送失败: ${error.message}`, error.stack);
      if (res && !res.headersSent) {
        res.status(500).send('Internal Server Error');
      }
    }
  }

  /**
   * 检查微信服务器签名
   * @param req Express请求对象
   * @param res Express响应对象
   */
  checkSignature(req: Request, res: Response): void {
    try {
      this.wxService.checkSignature(req, res);
    } catch (error) {
      this.logger.error(`检查微信签名失败: ${error.message}`, error.stack);
      if (res && !res.headersSent) {
        res.status(500).send('Internal Server Error');
      }
    }
  }

  /**
   * 发送客服消息
   * @param openid 用户OpenID
   * @param msgType 消息类型
   * @param content 消息内容
   * @returns 发送结果
   */
  async sendCustomMessage(openid: string, msgType: MessageType, content: MessageContent): Promise<DefaultRequestResult> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${token.access_token}`;
      
      const message = {
        touser: openid,
        msgtype: msgType,
        [msgType]: content
      };

      // 使用fetch API发送请求
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      });

      if (!response.ok) {
        throw new Error(`发送客服消息失败: ${response.statusText}`);
      }

      const result = await response.json() as DefaultRequestResult;
      if (result.errcode !== 0) {
        this.logger.warn(`发送客服消息返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      }

      return result;
    } catch (error) {
      this.logger.error(`发送客服消息失败: ${error.message}`, error.stack);
      throw error;
    }
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
    try {
      return await this.wxService.sendTemplateMessage(openid, templateId, data, url);
    } catch (error) {
      this.logger.error(`发送模板消息失败: ${error.message}`, error.stack);
      throw error;
    }
  }
}
