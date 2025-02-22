import { Injectable } from '@nestjs/common';

@Injectable()
export class BugwoziJobService {
  getHello(): string {
    return 'Hello World!';
  }
}
