import { Injectable } from '@nestjs/common';

@Injectable()
export class BugwoziFileService {
  getHello(): string {
    return 'Hello World!';
  }
}
