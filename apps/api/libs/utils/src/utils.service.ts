import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  public base64ToBuffer(base64: string) {
    return Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
  }
}
