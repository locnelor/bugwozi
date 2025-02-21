import { Injectable } from '@nestjs/common';

@Injectable()
export class BugwoziMainService {
  getHello(): string {
    return 'Hello World!';
  }
}
