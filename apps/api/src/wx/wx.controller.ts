import { MessageCrypto, WeChatService } from '@app/wechat';
import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { raw, xml } from 'body-parser';
import { Request, Response } from 'express';

import getRawBody from 'raw-body';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { createHash } from 'crypto';
import { ConfigService } from '@nestjs/config';

@Controller('wechat')
export class WxController {
  constructor(
    private readonly wechatService: WeChatService,
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
    @Req() req: Request,
    @Res() res: Response
  ) {
    const xmlData = req.body;

    const parser = new XMLParser({ ignoreAttributes: false });
    const msg = parser.parse(xmlData).xml;

    // 简单自动回复文本消息
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

  // @Post("handle")
  // async handle(
  //   @Req() req: Request,
  //   @Res() res: Response,

  // ) {
  //   // /wechat/handle?signature=c3e035bc3bd0588bfba91f671a83698243d6637e&timestamp=1746091789&nonce=2133267148&openid=oWZyw6edoc0XygKjECXTem--pmJI&encrypt_type=aes&msg_signature=9f26728839eaaffda737df1b6b41e491b17b27df
  //   const timestamp = req.query && req.query.timestamp;
  //   const nonce = req.query && req.query.nonce;
  //   const signature = req.query && (req.query.msg_signature || req.query.signature) as string;

  //   let rawBody;
  //   try {
  //     rawBody = await getRawBody(req);
  //   } catch (error) {
  //     const message = (error as Error).message as string;
  //     if (message === 'stream is not readable') {
  //       rawBody = req.body;
  //     }
  //   }

  //   let decrypt = '';
  //   let success = false;
  //   if (timestamp && nonce && signature && rawBody) {
  //     decrypt = this.wechatService.decryptMessage(signature, timestamp as string, nonce as string, rawBody.toString());
  //     success = true;
  //     console.log('收到微信消息:', decrypt);
  //   } else {
  //     throw new Error('消息参数不正确');
  //   }

  //   if (success && res && typeof res.send === 'function') {
  //     res.send('success');
  //   }
  //   return decrypt;
  //   // let rawBody;
  //   // try {
  //   //   rawBody = await getRawBody(req);
  //   // } catch (error) {
  //   //   const message = (error as Error).message as string;
  //   //   if (message === 'stream is not readable') {
  //   //     rawBody = req.body;
  //   //   }
  //   // }

  //   // console.log(timestamp)
  //   // console.log(nonce)
  //   // console.log(rawBody)
  //   // console.log(signature)


  //   // let decrypt = '';
  //   // let success = false;
  //   // const aesKey = MessageCrypto.getAESKey(signature || '');
  //   // const iv = MessageCrypto.getAESKeyIV(aesKey);
  //   // const parser = new XMLParser();
  //   // const xml = parser.parse(rawBody.toString());
  //   // const encryptMessage = xml.Encrypt;
  //   // const data = MessageCrypto.decrypt(aesKey, iv, encryptMessage);
  //   // console.log(data)


  //   // if (timestamp && nonce && signature && rawBody) {
  //   //   // decrypt = this.decryptMessage(signature as string, timestamp as string, nonce as string, rawBody.toString());
  //   //   success = true;
  //   // } else {
  //   //   throw new Error('message params incorrect');
  //   // }
  //   // const text = await this.wechatService.messagePushExpressHandler(req);
  //   // console.log(text);
  //   return ""
  // }
}
