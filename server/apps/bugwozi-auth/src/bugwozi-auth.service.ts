import { Injectable } from '@nestjs/common';

@Injectable()
export class BugwoziAuthService {
  getHello(): string {
    return 'Hello World!';
  }
}
