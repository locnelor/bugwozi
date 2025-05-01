import { WeChatService } from '@app/wechat';
import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { XMLBuilder } from 'fast-xml-parser';
import { createHash } from 'crypto';
import { ConfigService } from '@nestjs/config';
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
  Event: 'subscribe' | 'unsubscribe';
  /** 事件KEY值，目前无用 */
  EventKey: string;

  Content: string

  Ticket: string
}

@Controller('wechat')
export class WxController {
  constructor(
    private readonly configService: ConfigService
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
    @Body('xml') msg: IWxMessageXmlData,
  ) {
    console.log(msg)
    if (msg.Event === "subscribe") {
      const openid = msg.FromUserName;
      const time = msg.CreateTime;
      const Ticket = msg.Ticket
      const EventKey = msg.EventKey;
      console.log(openid)
      console.log(time)
      console.log(Ticket);
      console.log(EventKey)

      res.set('Content-Type', 'application/xml');
      res.send('');
      return;
    }
    const response = {
      xml: {
        ToUserName: msg.FromUserName,
        FromUserName: msg.ToUserName,
        CreateTime: Math.floor(Date.now() / 1000),
        MsgType: 'text',
        Content: `你说的是：${msg.Content}`,
      },
    };

    const builder = new XMLBuilder({ ignoreAttributes: false });
    const responseXml = builder.build(response);

    res.set('Content-Type', 'application/xml');
    res.send(responseXml);
  }
}
