import { MessageCrypto, WeChatService } from '@app/wechat';
import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { raw, xml } from 'body-parser';
import { Request, Response } from 'express';
import { XMLParser } from 'fast-xml-parser';

import getRawBody from 'raw-body';
@Controller('wechat')
export class WxController {
  constructor(
    private readonly wechatService: WeChatService
  ) { }

  @Post("handle")
  async handle(
    @Req() req: Request,
    @Res() res: Response,

  ) {
    // /wechat/handle?signature=c3e035bc3bd0588bfba91f671a83698243d6637e&timestamp=1746091789&nonce=2133267148&openid=oWZyw6edoc0XygKjECXTem--pmJI&encrypt_type=aes&msg_signature=9f26728839eaaffda737df1b6b41e491b17b27df
    const timestamp = req.query && req.query.timestamp;
    const nonce = req.query && req.query.nonce;
    const signature = req.query && (req.query.msg_signature || req.query.signature) as string;

    let rawBody;
    try {
      rawBody = await getRawBody(req);
    } catch (error) {
      const message = (error as Error).message as string;
      if (message === 'stream is not readable') {
        rawBody = req.body;
      }
    }

    console.log(timestamp)
    console.log(nonce)
    console.log(rawBody)
    console.log(signature)


    let decrypt = '';
    let success = false;
    const aesKey = MessageCrypto.getAESKey(signature || '');
    const iv = MessageCrypto.getAESKeyIV(aesKey);
    const parser = new XMLParser();
    const xml = parser.parse(rawBody.toString());
    const encryptMessage = xml.Encrypt;
    const data = MessageCrypto.decrypt(aesKey, iv, encryptMessage);
    console.log(data)


    if (timestamp && nonce && signature && rawBody) {
      // decrypt = this.decryptMessage(signature as string, timestamp as string, nonce as string, rawBody.toString());
      success = true;
    } else {
      throw new Error('message params incorrect');
    }
    const text = await this.wechatService.messagePushExpressHandler(req);
    console.log(text);
    return ""
  }
}
