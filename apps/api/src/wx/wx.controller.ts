import { WeChatService } from '@app/wechat';
import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { XMLBuilder } from 'fast-xml-parser';
import { createHash } from 'crypto';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/system/auth/auth.service';
import { WxMessageData, WxService } from './wx.service';

interface IWxMessageXmlData {
  /** 开发者微信号 e.g. `gh_019087f88815`*/
  ToUserName: string;
  /** 发送方帐号（一个OpenID）e.g.: `o5w5awUl***5pIJKY`*/
  FromUserName: string;
  /** 消息创建时间 （整型）e.g.`1595855711` */
  CreateTime: string;
  /** 消息类型，此处为 `event` */
  MsgType: string;
  /** 事件类型，subscribe(订阅)、unsubscribe(取消订阅) */
  Event: 'subscribe' | 'unsubscribe' | "SCAN";
  /** 事件KEY值，目前无用 */
  EventKey: string;

  Content: string

  Ticket: string
}

@Controller('wechat')
export class WxController {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
    private readonly wxService: WxService
  ) { }

  @Get("handle")
  verify(
    @Query('signature') signature: string,
    @Query('timestamp') timestamp: string,
    @Query('nonce') nonce: string,
    @Query('echostr') echostr: string,
    @Res() res: Response,
  ) {
    const tmpArr = [this.configService.get('WX_AESKEY'), timestamp, nonce].sort();
    const tmpStr = tmpArr.join('');
    const hash = createHash('sha1').update(tmpStr).digest('hex');

    if (hash === signature) {
      res.send(echostr);
    } else {
      res.status(401).send('Unauthorized');
    }
  }

  @Post("handle")
  async handle(
    @Res() res: Response,
    @Body('xml') msg: WxMessageData,
  ) {
    console.log(msg);

    // 处理二维码扫描登录
    if ((msg.Event === "SCAN" || msg.Event === "subscribe") && msg.EventKey) {
      const openid = msg.FromUserName;
      let sceneId = msg.EventKey;
      
      // 对于subscribe事件中的二维码参数，需要去掉前缀
      if (msg.Event === "subscribe" && sceneId.startsWith('qrscene_')) {
        sceneId = sceneId.substring(8);
      }
      
      // 保存扫码登录关联
      this.authService.setQrCode(sceneId, openid);
    }

    // 使用WxService处理微信消息
    const responseXml = await this.wxService.handleWxMessage(msg);

    res.set('Content-Type', 'application/xml');
    res.send(responseXml);
  }

  @Get("config")
  getConfig() {
    return this.wxService.getWechatConfig();
  }

  @Post("config")
  updateConfig(@Body() config: any) {
    return this.wxService.setWechatConfig(config);
  }
}
