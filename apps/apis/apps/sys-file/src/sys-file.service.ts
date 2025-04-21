import { Injectable } from '@nestjs/common';

@Injectable()
export class SysFileService {
  getHello(): string {
    return 'Hello World!';
  }
}
