import { Injectable } from '@nestjs/common';

@Injectable()
export class SysAuthService {
  getHello(): string {
    return 'Hello World!';
  }
}
