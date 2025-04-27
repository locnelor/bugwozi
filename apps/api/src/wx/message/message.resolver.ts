import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { MessageService, MessageType, TextMessage, ImageMessage, NewsItem } from './message.service';
import { DefaultRequestResult } from '@app/wechat';
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

// GraphQL类型定义
class WxTemplateMessageResult implements DefaultRequestResult {
  errcode: number;
  errmsg: string;
  msgid?: string;
}

class WxCustomMessageResult implements DefaultRequestResult {
  errcode: number;
  errmsg: string;
}

@Resolver('WxMessage')
@Controller('wx/message')
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  // GraphQL接口
  @Mutation(() => WxTemplateMessageResult, { description: '发送模板消息' })
  async sendTemplateMessage(
    @Args('openid') openid: string,
    @Args('templateId') templateId: string,
    @Args('data') data: string,
    @Args('url', { nullable: true }) url?: string,
  ) {
    const parsedData = JSON.parse(data);
    return this.messageService.sendTemplateMessage(openid, templateId, parsedData, url);
  }

  @Mutation(() => WxCustomMessageResult, { description: '发送文本客服消息' })
  async sendTextMessage(
    @Args('openid') openid: string,
    @Args('content') content: string,
  ) {
    const textMessage: TextMessage = { content };
    return this.messageService.sendCustomMessage(openid, MessageType.TEXT, textMessage);
  }

  @Mutation(() => WxCustomMessageResult, { description: '发送图片客服消息' })
  async sendImageMessage(
    @Args('openid') openid: string,
    @Args('mediaId') mediaId: string,
  ) {
    const imageMessage: ImageMessage = { media_id: mediaId };
    return this.messageService.sendCustomMessage(openid, MessageType.IMAGE, imageMessage);
  }

  @Mutation(() => WxCustomMessageResult, { description: '发送图文客服消息' })
  async sendNewsMessage(
    @Args('openid') openid: string,
    @Args('articles') articlesJson: string,
  ) {
    const articles: NewsItem[] = JSON.parse(articlesJson);
    return this.messageService.sendCustomMessage(openid, MessageType.NEWS, { articles });
  }

  // RESTful接口
  @Get('check')
  checkSignature(@Req() req: Request, @Res() res: Response): void {
    this.messageService.checkSignature(req, res);
  }

  @Post()
  async handleMessage(@Req() req: Request, @Res() res: Response): Promise<void> {
    await this.messageService.handleMessagePush(req, res);
  }

  @Post('plain')
  async handlePlainMessage(@Req() req: Request, @Res() res: Response): Promise<void> {
    await this.messageService.handlePlainMessagePush(req, res);
  }
}
