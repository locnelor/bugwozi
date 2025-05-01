import { WeChatService } from '@app/wechat';
import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { XMLBuilder } from 'fast-xml-parser';
import { createHash } from 'crypto';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/system/auth/auth.service';
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
    private readonly authService: AuthService
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


  //   @web/api:dev:   ToUserName: 'gh_bdb21a973b5c',
  //   @web/api:dev:   FromUserName: 'oWZyw6edoc0XygKjECXTem--pmJI',
  //   @web/api:dev:   CreateTime: '1746110390',
  //   @web/api:dev:   MsgType: 'event',
  //   @web/api:dev:   Event: 'SCAN',
  //   @web/api:dev:   EventKey: 'b3ff5e1e-1b33-45d3-96a1-b355ab703b04',
  //   @web/api:dev:   Ticket: 'gQFt7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAybngyd0FicHNlTUYxYWw4anhFY1cAAgRphxNoAwQsAQAA',
  //   @web/api:dev:   Encrypt: 'Njj7X+wb7LcWYpXdLQUZuzyLnFR1nBMCziZ9kYdfwLVDxareNOF7ltr7CKLE8M//fSeYh1HyTWetu/SecZZhLQQn9S7OsHfy0VJzqcwgNQkoc5PYkELR0Ag6Q9U2XoD6dXCT4WNEMz3/KgqLkdT0+E5r36IObyHAEcIl/O+2nEl/kr8SjgvnctnSN29ibVWHPqEML7G4bfnjGE1sdWRb9xYuA1zCNMJfPloO4eNDSVaMZYDKHZmi3Kijp25Xd6By7Z+jaeD78hzrQVC+jgFlC0HYBzX4gG/y5vMSa4ubeBn/45uL9/O9S2dwAvaivM5yGeGvVW6zcWL521Pr61baKfC1+Ts8Bp8EClG3qNf7QKrRjuRGLq3Hg8+BLWQa9/GzmjmJjIu6NqBW/xX0RNkgndlSV37zW8wMbVM3tu8VCC5TKlW83CopvKC8u6zaeWWxiiUOalLnIaEP/y89nefgxsPY6iDZc/8nHQolk23Gus7spG7LFgewxB5JaMErAn55KRHJS1DjB7TaISu2JNidtbEqYVH22i4nffPrzXeqxjNxPBose6MLMOty2K6Ll94j9aVSjhS7rRtAzf9fGaayftQi2/dGR3peGgb07aRZQM1liwIe0jT4m/ECNQvxjxIY'


  // @web/api:dev: [Object: null prototype] {
  //   @web/api:dev:   ToUserName: 'gh_bdb21a973b5c',
  //   @web/api:dev:   FromUserName: 'oWZyw6R0mPH-tU00ReQEMxz-oco8',
  //   @web/api:dev:   CreateTime: '1746112312',
  //   @web/api:dev:   MsgType: 'event',
  //   @web/api:dev:   Event: 'subscribe',
  //   @web/api:dev:   EventKey: 'qrscene_e67b30d1-e393-43ad-b84c-6642cc785a83',
  //   @web/api:dev:   Ticket: 'gQEa8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyVHJCUkFucHNlTUYxOWlnajFFY1EAAgQmjxNoAwQsAQAA',
  //   @web/api:dev:   Encrypt: 'NSyWLmARQq2WsQoAeTIBL381LAoVAx179ZIeeCw/izkyI3xfsIjwHBUt8PZD/J8V+KGh0NnOKX4H2WpX7qch+HYzGw5TkTiea1Ds9pdqE+Nu4Aa+APIk5L/Jl5bb6sXYeMHK4a/8r+1ndGT6H4Qh7I0uy6gD34ngOhi9oAtK/oZHcnE8KWcuEYwzgzw4aNgdqai0Pk0+W58Q3b43/29UkSX8JsMG339ruSNm6vp7Vnp3lQCP0A4Loa1sBKmM7w027pHHgBnA2M2Gye7Xlt4wl7LzdF2D87fL4ZKfNQCtqOW9T40HbCvC7DMTBmceeNq3Fbw8HxSDxr5h9Le+TuUb8LOcvGWn0siJEaTAxb5i4AaPaomXW9X2AMarO99QCve4BCouSZ6LDrY59H78X80Dgvs7gVGToJpEstUUDSm6lJ1Nvb5K83MDgz9Fsc52risd9OQ/8iRkV788ORkc6zewR4m9a82RNtLJiy2gGakCb5SiGSZjyLmo4BMgFmXPn5/rNIUhg0G51LGD+QLSG8cu17jT9KIExDvqKdU8gGBA7PseLeuMTcYijcYAhcGyhIwMOLSzn41EcAy5pD0jmXqqIM7NRhCKPiHOtBSZXY2Lt2ZggEuoXci+eyxHWSA9UhU81Q5P7oy3/Dvu284w5DHJhfswkcmIQPcxVX+iFtmmS9Y='
  //   @web/api:dev: }
  @Post("handle")
  async handle(
    @Res() res: Response,
    @Body('xml') msg: IWxMessageXmlData,
  ) {
    console.log(msg)
    const openid = msg.FromUserName;
    if (msg.Event === "SCAN" || msg.Event === "subscribe") {
      // const time = msg.CreateTime;
      // const Ticket = msg.Ticket
      const EventKey = msg.EventKey;
      this.authService.setQrCode(EventKey, openid);
      // console.log(openid)
      // console.log(time)
      // console.log(Ticket);
      // console.log(EventKey)

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
