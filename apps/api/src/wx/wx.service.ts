import { WeChatService } from '@app/wechat';
import { Injectable, Logger } from '@nestjs/common';
import { FileService } from '@app/file';
import { XMLBuilder } from 'fast-xml-parser';
import { AuthService } from 'src/system/auth/auth.service';

// 微信消息接口
export interface WxMessageData {
  ToUserName: string;
  FromUserName: string;
  CreateTime: string;
  MsgType: string;
  Event?: 'subscribe' | 'unsubscribe' | 'SCAN';
  EventKey?: string;
  Content?: string;
  Ticket?: string;
}

export interface WechatConfig {
  /**
   * 自动回复配置
   */
  autoReply?: {
    /**
     * 是否启用自动回复
     */
    enabled: boolean;
    /**
     * 默认回复内容
     */
    defaultReply?: string;
    /**
     * 关键词回复规则
     */
    rules?: Array<{
      /**
       * 关键词
       */
      keywords: string[];
      /**
       * 回复内容
       */
      content: string;
      /**
       * 匹配模式：exact(完全匹配) | contains(包含匹配)
       */
      matchMode?: 'exact' | 'contains';
    }>;
  };
  /**
   * 关注后回复配置
   */
  subscribeReply?: {
    /**
     * 是否启用关注后回复
     */
    enabled: boolean;
    /**
     * 关注后回复内容
     */
    content: string;
  };
}

@Injectable()
export class WxService {
  private logger = new Logger(WxService.name);
  private config: WechatConfig = {
    autoReply: {
      enabled: true,
      defaultReply: 'helloWorld!',
      rules: []
    },
    subscribeReply: {
      enabled: true,
      content: '感谢您的关注！'
    }
  };

  constructor(
    // private readonly wechat: WeChatService,
    private readonly file: FileService,
    private readonly auth: AuthService
  ) {
    this.loadConfig();
  }

  /**
   * 加载微信配置
   */
  private loadConfig() {
    try {
      const savedConfig = this.file.getWechatConfig(); // 默认数据为{}
      if (savedConfig && Object.keys(savedConfig).length > 0) {
        this.config = { ...this.config, ...savedConfig };
      }
      this.logger.log('微信配置已加载');
    } catch (error) {
      this.logger.error('加载微信配置失败', error);
    }
  }

  /**
   * 获取微信配置
   */
  public getWechatConfig(): WechatConfig {
    return this.config;
  }

  /**
   * 设置微信配置
   * @param config 配置对象
   */
  public setWechatConfig(config: WechatConfig) {
    this.config = { ...this.config, ...config };
    // 保存配置到文件
    this.file.setWechatConfig(this.config);
    this.logger.log('微信配置已更新并保存');
    return this.config;
  }

  /**
   * 处理微信消息
   * @param msg 微信消息数据
   * @returns XML响应或空字符串
   */
  public async handleWxMessage(msg: WxMessageData): Promise<string> {
    this.logger.debug(`收到微信消息：${JSON.stringify(msg)}`);

    // 如果是扫描二维码事件
    if (msg.Event === 'SCAN') {
      // 处理扫码事件，返回空字符串
      this.handleScanQrCode(msg.FromUserName, msg.EventKey);
      return '';
    }

    // 如果是订阅事件
    if (msg.Event === 'subscribe') {
      // 处理订阅事件
      const response = this.handleSubscribe(msg);
      // 同时处理二维码扫描
      if (msg.EventKey && msg.EventKey.startsWith('qrscene_')) {
        const sceneId = msg.EventKey.substring(8); // 去掉 'qrscene_' 前缀
        this.handleScanQrCode(msg.FromUserName, sceneId);
      }
      return response;
    }

    // 如果是文本消息
    if (msg.MsgType === 'text' && msg.Content) {
      return this.handleTextMessage(msg);
    }

    // 其他类型消息，返回默认回复
    return this.buildDefaultReply(msg);
  }

  /**
   * 处理扫描二维码事件
   * @param openid 用户openid
   * @param sceneId 场景ID/EventKey
   */
  private handleScanQrCode(openid: string, sceneId: string) {
    this.logger.log(`用户 ${openid} 扫描二维码，场景ID: ${sceneId}`);
    // 这里可以调用其他服务的方法处理扫码逻辑，例如登录认证等
    this.auth.setQrCode(sceneId, openid);
  }

  /**
   * 处理订阅事件
   * @param msg 微信消息数据
   * @returns XML响应
   */
  private handleSubscribe(msg: WxMessageData): string {
    // 检查是否启用了订阅回复
    if (this.config.subscribeReply?.enabled && this.config.subscribeReply.content) {
      const response = {
        xml: {
          ToUserName: msg.FromUserName,
          FromUserName: msg.ToUserName,
          CreateTime: Math.floor(Date.now() / 1000),
          MsgType: 'text',
          Content: this.config.subscribeReply.content,
        },
      };
      return this.buildXmlResponse(response);
    }

    // 如果未启用订阅回复，返回空字符串
    return '';
  }

  /**
   * 处理文本消息
   * @param msg 微信消息数据
   * @returns XML响应
   */
  private handleTextMessage(msg: WxMessageData): string {
    // 检查是否启用了自动回复
    if (!this.config.autoReply?.enabled) {
      return '';
    }

    const userContent = msg.Content;
    let replyContent = this.config.autoReply.defaultReply || '';

    // 检查是否有匹配的关键词规则
    if (this.config.autoReply.rules && this.config.autoReply.rules.length > 0) {
      for (const rule of this.config.autoReply.rules) {
        const matchMode = rule.matchMode || 'contains';

        // 检查是否有匹配的关键词
        const hasMatchedKeyword = rule.keywords.some(keyword => {
          if (matchMode === 'exact') {
            return keyword === userContent;
          } else {
            return userContent.includes(keyword);
          }
        });

        // 如果找到匹配的关键词，使用对应的回复内容
        if (hasMatchedKeyword) {
          replyContent = rule.content;
          break;
        }
      }
    }

    // 构建回复消息
    const response = {
      xml: {
        ToUserName: msg.FromUserName,
        FromUserName: msg.ToUserName,
        CreateTime: Math.floor(Date.now() / 1000),
        MsgType: 'text',
        Content: replyContent,
      },
    };

    return this.buildXmlResponse(response);
  }

  /**
   * 构建默认回复
   * @param msg 微信消息数据
   * @returns XML响应
   */
  private buildDefaultReply(msg: WxMessageData): string {
    // 如果未启用自动回复，返回空字符串
    if (!this.config.autoReply?.enabled) {
      return '';
    }

    const response = {
      xml: {
        ToUserName: msg.FromUserName,
        FromUserName: msg.ToUserName,
        CreateTime: Math.floor(Date.now() / 1000),
        MsgType: 'text',
        Content: this.config.autoReply.defaultReply || '谢谢您的留言！',
      },
    };

    return this.buildXmlResponse(response);
  }

  /**
   * 构建XML响应
   * @param response 响应对象
   * @returns XML字符串
   */
  private buildXmlResponse(response: any): string {
    const builder = new XMLBuilder({ ignoreAttributes: false });
    return builder.build(response);
  }
}
