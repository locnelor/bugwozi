import { Injectable } from '@nestjs/common';

@Injectable()
export class BugwoziGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
