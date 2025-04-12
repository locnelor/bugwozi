import { Injectable } from '@nestjs/common';

@Injectable()
export class BugwoziService {
  getHello(): string {
    return 'Hello World!';
  }
}
