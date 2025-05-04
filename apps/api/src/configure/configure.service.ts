import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigureService {
  //订单有效时间
  public static ORDER_QR_CODE_EXPIRE = 60 * 10 //十分钟

  //登录二维码有效时间
  public static LOGIN_QR_CODE_EXPIRE = 60 * 5 //五分钟
}
