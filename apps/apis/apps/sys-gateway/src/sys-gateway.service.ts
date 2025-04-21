import { Injectable } from '@nestjs/common';

@Injectable()
export class SysGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
