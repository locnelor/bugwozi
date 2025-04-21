import { Injectable } from '@nestjs/common';

@Injectable()
export class StudyRoomService {
  getHello(): string {
    return 'Hello World!';
  }
}
