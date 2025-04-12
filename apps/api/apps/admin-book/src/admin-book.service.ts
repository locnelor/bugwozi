import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminBookService {
  getHello(): string {
    return 'Hello World!';
  }
}
